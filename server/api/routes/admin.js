import express, { Router } from "express";
import logger from "../../loaders/logger.js";
import { Plan as planModel } from "../../models/plan.js";
import { Notice as noticeModel } from "../../models/notice.js";
import { Member as memberModel } from "../../models/member.js";
import { Project as projectModel } from "../../models/project.js";
import { Photo as photoModel } from "../../models/photo.js";
import { Counter as counterModel } from "../../models/counter.js";
import { adminService } from "../../services/admin.js";
import { UserCode as userCodeModel } from "../../models/userCode.js";
import path from "path";
import { upload } from "../middlewares/multer.js";
import { AuthService } from "../../services/auth.js";
import { CustomError } from "../../CustomError.js";
import sizeOf from "image-size";
import { asyncErrorWrapper } from "../../asyncErrorWrapper.js";

import { checkAdmin } from "../middlewares/checkAdmin.js";
import { getUserbyAccessToken } from "../middlewares/getUserbyAccessToken.js";
import { isReissueAccessToken } from "../middlewares/isReissueAccessToken.js";
const route = Router();
export default (app) => {
    app.use("/admin", route);

    route.post(
        "/login",
        upload.fields([{ name: "data" }, { name: "img" }]),
        asyncErrorWrapper(async (req, res, next) => {
            const body = Object.fromEntries(Object.entries(req.body).map(([key, value]) => [key, JSON.parse(value)]));

            const AuthServiceInstance = new AuthService({ memberModel });

            const { _id, name, accessToken, refreshToken, isLogin } = await AuthServiceInstance.SignIn(body);

            res.cookie("R_AUTH", refreshToken, {
                sameSite: "none",
                httpOnly: true,
                secure: true,
                // maxAge: 1000 * 60 * 60 * 24 * 14, // 2 Week
                maxAge: 10, // 2 Week
            });

            res.status(200).json({ _id, name, accessToken, isLogin });
        })
    );

    route.post(
        "/:page",
        getUserbyAccessToken,
        isReissueAccessToken,

        checkAdmin,
        upload.fields([{ name: "data" }, { name: "img" }]),
        asyncErrorWrapper(async (req, res) => {
            const body = Object.fromEntries(Object.entries(req.body).map(([key, value]) => [key, JSON.parse(value)]));
            logger.info(JSON.stringify(req.user));
            logger.info(JSON.stringify(body));

            console.log("req.params", req.params.page);
            const { page } = req.params;
            const adminServiceInstance = new adminService({ projectModel, photoModel, memberModel, noticeModel, planModel });
            const counter = await counterModel.findOnebyName(page);

            const _id = counter.count + 1;

            const img = req.files?.img ? req.files?.img[0] : undefined;
            const imgUrl = img?.path;
            const imgName = img?.filename;
            console.log(img);
            const model = body?.model
                ? await Promise.all(
                      body?.model?.map(async (item, index) => {
                          if (typeof item === "number") {
                              const member = await adminServiceInstance.memberModel.findOne({ _id: item });
                              console.log("number member", member);
                              return { _id: member?._id, name: member?.name };
                          } else {
                              const member = await adminServiceInstance.memberModel.findOne({ _id: Number(item) });
                              console.log("member", member);
                              console.log("member", typeof member?._id);
                              return { _id: member?._id, name: member?.name };
                          }
                      })
                  )
                : undefined;
            const photographer = body?.photographer ? await adminServiceInstance.getMemberIdOrNameById(Number(body?.photographer)) : undefined;
            const writer = { _id: 0, name: "admin" };

            const project = body?.project ? await adminServiceInstance.projectModel.findOne({ _id: Number(body?.project) }) : undefined;

            const imgRatio = img ? sizeOf(img?.path).width / sizeOf(img?.path).height : undefined;

            const date = await adminServiceInstance.getToday();

            const data = { ...body, _id, imgUrl, imgName, imgRatio, model, date, writer, project, photographer };

            await adminServiceInstance.modify(page, { _id: _id }, data);
            await counterModel.updateOne({ name: page }, { $inc: { count: 1 } });

            // if (req.params.page === "project") {
            // } else if (req.params.page === "photo") {
            //     data.imgUrl = img.path;
            //     data.imgName = img.filename;
            //     data.imgRatio = sizeOf(img.path).width / sizeOf(img.path).height;
            // } else if (req.params.page === "plan") {
            // } else if (req.params.page === "notice") {
            // } else if (req.params.page === "member") {
            // }
            // console.log(data);
            res.status(200).json({
                message: "success",
            });
        })
    );

    route.get(
        "/",
        asyncErrorWrapper(async (req, res) => {
            const adminServiceInstance = new adminService({ projectModel, memberModel, userCodeModel });
            const members = await adminServiceInstance.memberModel.find();
            const projects = await adminServiceInstance.projectModel.find();
            const userCodes = await adminServiceInstance.userCodeModel.find();
            const data = { members, projects, userCodes };

            res.status(200).json(data);
        })
    );

    route.get("/plan/:id", (req, res) => {});
};
