import express, { Router } from "express";

import { Member as memberModel } from "../../models/member.js";
import { memberService } from "../../services/member.js";
const route = Router();
export default (app) => {
    app.use("/member", route);

    route.get("/", async (req, res) => {
        const memberServiceInstance = new memberService(memberModel);
        const members = await memberServiceInstance.getMembers();

        return res.status(200).json({ members });
    });
};
