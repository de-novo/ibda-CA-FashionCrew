import config from "../config/index.js";
import { CustomError } from "../CustomError.js";

export class contentService {
    constructor({ noticeModel, planModel }) {
        this.noticeModel = noticeModel;
        this.planModel = planModel;
    }

    async getNotice() {
        const notices = await this.noticeModel.find();

        return notices;
    }
    async getNoticeByID() {}
    async getPlan() {
        const plans = await this.planModel.find();
        return plans;
    }
    async getPlanByID() {}
}
