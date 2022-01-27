import mongoose from "mongoose";
import config from "../config/index.js";
import jwt from "jsonwebtoken";

const writerSchema = mongoose.Schema({
    _id: Number,
    name: String,
});
const memberSchema = mongoose.Schema(
    {
        _id: Number,
        name: String,
        eg_name: String,
        insta: String,
        userCode: Number,
        subscription: { type: Number, min: 2020, max: new Date().getFullYear() },
        birth: Date,
        imgURL: String,
        imgName: String,
        imgRatio: Number,
        writer: writerSchema,
    },
    { collection: "member" }
);

memberSchema.methods.generateAccessToken = async function () {
    const member = this;
    const accessToken = await jwt.sign(
        {
            _id: member._id,
            name: member.name,
            birth: member.birth,
            userCode: member.userCode,
        },
        config.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "1h",
            issuer: config.issuer,
        }
    );
    return accessToken;
};
memberSchema.methods.generateRefreshToken = async function () {
    const member = this;
    const refreshToken = await jwt.sign(
        {
            _id: member._id,
            name: member.name,
            birth: member.birth,
            userCode: member.userCode,
        },
        config.REFRESH_TOKEN_SECRET,
        {
            expiresIn: "1w",
            issuer: config.issuer,
        }
    );
    return refreshToken;
};

const Member = mongoose.model("Member", memberSchema);
export { Member };
