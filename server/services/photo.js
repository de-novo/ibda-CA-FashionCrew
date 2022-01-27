import config from "../config/index.js";
import { CustomError } from "../CustomError.js";

export class photoService {
    constructor(photoModel) {
        this.photoModel = photoModel;
    }

    async findByProjectId(projectId) {
        const photos = await this.photoModel.findByProjectId(projectId);
        return photos;
    }

    async findByModelId(modelId) {
        const photos = await this.photoModel.findByModelId(modelId);
        return photos;
    }
}
