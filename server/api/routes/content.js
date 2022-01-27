import express, { Router } from "express";
import { Plan as planModel } from "../../models/plan.js";
import { Notice as noticeModel } from "../../models/notice.js";
import { contentService } from "../../services/content.js";
const route = Router();
export default (app) => {
    app.use("/content", route);

    route.get("/notice", async (req, res) => {
        const contentInstance = new contentService({ noticeModel });
        const notices = await contentInstance.getNotice();

        res.status(200).json({ notices });
    });
    route.get("/notice/:id", (req, res) => {});
    route.get("/plan", async (req, res) => {
        const contentInstance = new contentService({ planModel });
        const plans = await contentInstance.getPlan();

        res.status(200).json({ plans });
    });
    route.get("/plan/:id", (req, res) => {});
};
