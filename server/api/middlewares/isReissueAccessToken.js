import config from "../../config/index.js";
import jwt from "jsonwebtoken";
import { Member as memberModel } from "../../models/member.js";
import { AuthService } from "../../services/auth.js";
import { CustomError } from "../../CustomError.js";
import { asyncErrorWrapper } from "../../asyncErrorWrapper.js";

const isReissueAccessToken = asyncErrorWrapper(async (req, res, next) => {
    // console.log('req.cookies.R_AUTH',req.cookies.R_AUTH)
    if (req.user) {
        console.log("isReissueAccessToken accessToken 유효함");
        return next();
    }
    if (!req.cookies.R_AUTH) {
        console.log("not found refreshToken  plese login  (없음)", req.cookies.R_AUTH);

        throw new CustomError("Forbidden", 403, "not found RefreshToken"); //not found refreshToken ' plese login ' (없
    }
    const AuthServiceInstance = new AuthService({ memberModel });
    const refreshToken = req.cookies.R_AUTH;
    const { _id, name, insta, userCode, accessToken, decodeSuccess } = await AuthServiceInstance.reissueAccessToken(refreshToken);
    if (!decodeSuccess) {
        console.log("refresh token inValid (만료됨)");
        res.clearCookie("R_AUTH");
       
        throw new jwt.JsonWebTokenError();
    } else {
        console.log("accessToken reissue");
        return res.status(200).json({
            _id,
            name,
            insta,
            userCode,
            accessToken,
        });
    }
});

export { isReissueAccessToken };
