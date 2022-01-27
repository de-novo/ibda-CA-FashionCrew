//라우터 기본설정
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const session = require("express-session");
//db 설정
const { mongodburl } = require("../MongodbUrl");
const MongoClient = require("mongodb").MongoClient;

let db;

MongoClient.connect(mongodburl, (error, client) => {
    if (error) return console.log("에러", error);

    db = client.db("DENOVO");
});

const ACCESS_TOKEN_SECRET = "ACCESS_jwt-secret-key";
const REFRESH_TOKEN_SECRET = "REFRESH_jwt-secret-key";

//로그인 모듈 require
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { ExtractJwt, Strategy: JWTStrategy } = require("passport-jwt");

///access토큰생성기
const generateAccessToken = (user) => {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "1m" });
};
///refresh토큰생성기
const generateRefreshToken = (user) => {
    return jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: "30day" });
};

// access token의 유효성 검사
const authenticateAccessToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    let token = authHeader && authHeader.split(" ")[1];
    let tokenType = authHeader && authHeader.split(" ")[0];
    // console.log(authHeader,'authHeader')
    console.log("tokenType :", tokenType);

    // if(tokenType!=="Bearer"){
    //     res.status(401).send({
    //         errorMessage: "로그인이 필요합니다.",
    //     })
    //     return
    // }

    if (!token) {
        console.log("wrong token format or token is not sended");
        return res.sendStatus(400);
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET, async (error, user) => {
        console.log("authenticateAccessToken : ", user);
        try {
            if (error) {
                if (error.name === "TokenExpiredError") {
                    console.log("====================================================================TokenExpiredError========================================================================");
                    // 원래는 디비에서 refresh 토큰 가져와서 분석해서 해야함
                    //만약 리프레시 토큰도 만료? 강제 로그아웃
                    let userInfo = jwt.decode(token, ACCESS_TOKEN_SECRET);
                    const USER = await db.collection("member").findOne({ _id: userInfo._id });
                    const REFRESH_TOKEN = USER.REFRESH_TOKEN;

                    console.log("========================================================================REFRESH_TOKEN========================================================================");
                    console.log(REFRESH_TOKEN);
                    console.log("=============================================================================================================================================================");

                    const NEW_TOKEN = jwt.verify(REFRESH_TOKEN, REFRESH_TOKEN_SECRET, (error, user) => {
                        if (error) {
                            return res.sendStatus(403);
                        }
                        console.log(
                            "========================================================================REFRESH_TOKEN_user========================================================================"
                        );
                        console.log(user);
                        return generateAccessToken({ _id: user._id, insta: user.insta, name: user.name });
                    });
                    console.log("========================================================================NEW_TOKEN========================================================================");
                    console.log(NEW_TOKEN);
                    console.log("=========================================================================================================================================================");
                    return res.send({ NEW_TOKEN: NEW_TOKEN });
                }

                console.log(error, "403");
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        } catch (err) {
            console.error(err);
        }
    });
};

const authenticateJWT = (req, res, next) =>
    passport.authenticate("jwt", { sessions: false }, (error, user) => {
        console.log("authenticateJWT", user);
        //verifyUser에서 user를 찾았다면 서버에게 요청하는 req객체의 user에 담아서 서버에게 넘겨줌
        if (user) {
            req.user = user;
        }
        next();
    })(req, res, next);

router.use(passport.initialize());

// router.get("/", (req, res) => {
//     console.log("/api/admin", req.get("token"));
//     if (req.session) {
//         res.send({ loggedIn: true, session: req.session, passport: req.session.passport });
//     }
// });

// const passportVerify = async (userId, password, done) => {
//     console.log(userId, password);
//     try {
//         const user = await db.collection("member").findOne({ insta: userId });
//         console.log(user);
//         if (!user) {
//             return done(null, false, { message: "존재하지 않는 사용자 입니다." });
//         }

//         const compareResult = await bcrypt.compare(password, user.name);

//         if (compareResult) {
//             return done(null, user);
//         }

//         done(null, false, { reason: "올바르지 않은 비밀번호 입니다." });
//     } catch (error) {
//         console.error(error);
//         done(error);
//     }
// };

passport.use(
    new LocalStrategy({ usernameField: "admin_code", passwordField: "pw", session: false }, async (userId, password, done) => {
        console.log(userId, password);
        try {
            const user = await db.collection("member").findOne({ insta: userId });
            console.log("================================================================================LOGIN================================================================================");
            console.log("LOGIN :", user.name);
            console.log("=====================================================================================================================================================================");
            if (!user) {
                return done(null, false, { message: "존재하지 않는 사용자 입니다." });
            }

            if (user) {
                return done(null, user);
            }

            done(null, false, { reason: "올바르지 않은 비밀번호 입니다." });
        } catch (error) {
            console.error(error);
            done(error);
        }
    })
);

router.post("/", async (req, res, next) => {
    try {
        // 아까 local로 등록한 인증과정 실행
        passport.authenticate("local", (passportError, user, info) => {
            // 인증이 실패했거나 유저 데이터가 없다면 에러 발생

            if (passportError || !user) {
                res.status(400).json({ message: info });
                return;
            }
            // user데이터를 통해 로그인 진행
            req.login(user, { session: false }, (loginError) => {
                if (loginError) {
                    res.send(loginError);
                    return;
                }

                const ACCESS_TOKEN = generateAccessToken({ _id: user._id, insta: user.insta, name: user.name });
                const REFRESH_TOKEN = generateRefreshToken({ _id: user._id, insta: user.insta, name: user.name });
                db.collection("member")
                    .updateOne({ _id: user._id }, { $set: { REFRESH_TOKEN: REFRESH_TOKEN } })

                    .then((res) => {
                        console.log(
                            "================================================================================DB UPDATE================================================================================"
                        );
                        console.log(
                            "------------------------------------------------------------------------------REFRESH_TOKEN------------------------------------------------------------------------------"
                        );
                        console.log(
                            "========================================================================================================================================================================="
                        );
                    })
                    .catch((e) => console.log(e));
                return res.json({ ACCESS_TOKEN });
            });
        })(req, res, next);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

const JWTConfig = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: ACCESS_TOKEN_SECRET,
};

const JWTVerify = async (jwtPayload, done) => {
    try {
        console.log(jwtPayload, "jwtPayload");
        // payload의 id값으로 유저의 데이터 조회
        const user = await db.collection("member").findOne({ insta: jwtPayload.insta });
        console.log("JWTVerify", user);
        // 유저 데이터가 있다면 유저 데이터 객체 전송
        if (user) {
            return done(null, user);
        }
        // 유저 데이터가 없을 경우 에러 표시

        return done(null, false, { reason: "올바르지 않은 인증정보 입니다." });
    } catch (error) {
        console.error(error);
        return done(error);
    }
};

passport.use("jwt", new JWTStrategy(JWTConfig, JWTVerify));

module.exports = () => {
    return { router, passport: () => passport.use("jwt", new JWTStrategy(JWTConfig, JWTVerify)), authenticateAccessToken: authenticateAccessToken };
};
