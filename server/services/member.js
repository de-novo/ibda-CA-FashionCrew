import config from "../config/index.js";
import { CustomError } from "../CustomError.js";

export class memberService {
    constructor(memberModel) {
        this.memberModel = memberModel;
    }

    async getMembers() {
        const members = await this.memberModel.find()
        return members;
    }

    async findByModelId(modelId) {
        const photos = await this.photoModel.findByModelId(modelId);
        return photos;
    }
}
