import config from "../config/index.js";
import { CustomError } from "../CustomError.js";
import jwt from "jsonwebtoken";
export class adminService {
    constructor({ projectModel, planModel, photoModel, noticeModel, memberModel, userCodeModel }) {
        this.noticeModel = noticeModel;
        this.planModel = planModel;
        this.projectModel = projectModel;
        this.photoModel = photoModel;
        this.memberModel = memberModel;
        this.userCodeModel = userCodeModel;
    }

    async getNotice() {
        const notices = await this.noticeModel.find();

        return notices;
    }
   

    async getPlan() {
        const plans = await this.planModel.find();
        return plans;
    }

    async getToday() {
        const date = new Date();

        return date;
    }

    async getMemberIdOrNameById(memberID) {
        const member = await this.memberModel.findOne({ _id: memberID });
        console.log("getMemberIdOrNameById", member);
        return {
            _id: member._id,
            name: member.name,
        };
    }
    async getMemberByName(memberName) {
        const member = await this.memberModel.findOne({ name: memberName });
        return member;
    }
    async modify(target, condition, data) {
        switch (target) {
            case "project":
                await this.projectModel.findOneAndUpdate(condition, data, {
                    new: true,
                    upsert: true,
                });
                break;
            case "photo":
                await this.photoModel.findOneAndUpdate(condition, data, {
                    new: true,
                    upsert: true,
                });
                break;
            case "member":
                await this.memberModel.findOneAndUpdate(condition, data, {
                    new: true,
                    upsert: true,
                });
                break;
            case "notice":
                await this.noticeModel.findOneAndUpdate(condition, data, {
                    new: true,
                    upsert: true,
                });
                break;
            case "plan":
                await this.planModel.findOneAndUpdate(condition, data, {
                    new: true,
                    upsert: true,
                });
                break;
            default:
                break;
        }
        // const record = await
    }
}
