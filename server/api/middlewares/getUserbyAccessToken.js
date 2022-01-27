import config from "../../config/index.js";
import  jwt  from "jsonwebtoken";
import { Member } from "../../models/member.js";
import { asyncErrorWrapper } from "../../asyncErrorWrapper.js";

const getUserbyAccessToken = asyncErrorWrapper(async (req, res, next) => {
    let userID;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        let token = req.headers.authorization.split(" ")[1];
        console.log('getUserbyAccessToken--token :' , )
        try {
            const decodedUser = await jwt.verify(token, config.ACCESS_TOKEN_SECRET);
            const user = await Member.findOne({ name: decodedUser.name });
            if (user) {
                userID = decodedUser;
            }
        } catch (err) {}
    }
    req.user = userID;
    next();
});

export { getUserbyAccessToken };
