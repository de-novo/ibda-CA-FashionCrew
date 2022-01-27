import config from "../config/index.js";
import jwt from "jsonwebtoken";
import { CustomError } from "../CustomError.js";

export class AuthService {
    constructor({ memberModel }) {
        this.memberModel = memberModel;
    }

    async SignIn({ ID, PW }) {
        const member = await this.memberModel.findOne({ name: ID });

        console.log(member);
        if (!member) throw new CustomError("InvaildParameterError", 401, "Member not found");

        console.log(PW === member.insta);
        const _id = member._id;
        const name = member.name;
        const accessToken = await member.generateAccessToken();
        const refreshToken = await member.generateRefreshToken();
        return { _id, name, accessToken, refreshToken, isLogin: PW === member.insta };
    }

    async reissueAccessToken(refreshToken) {
        let decodeSuccess = true;
        let decodeRefreshToken = "";
        console.log("reissueAccessToken");
        try {
            decodeRefreshToken = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
            console.log("reissueAccessToken", decodeRefreshToken);
            const member = await this.memberModel.findOne({ name: decodeRefreshToken.name });
            if (!member) {
                console.log("!member");
                throw new CustomError("InvaildParameterError", 401, "Member not found");
            }
            const { _id, name, insta, userCode } = member;
            const accessToken = await member.generateAccessToken();
            return { _id, name, insta, userCode, accessToken, decodeSuccess };
        } catch (err) {
            console.log("reissueAccessToken err : ", err);
            decodeSuccess = false;
            return { decodeSuccess };
        }
    }
}
