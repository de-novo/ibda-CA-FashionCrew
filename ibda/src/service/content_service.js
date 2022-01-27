import api from "../utils/api";

class Content {
    constructor() {
        this.api = api;
    }
    // getProject
    GetNotices = async () => {
        return await this.api.get("/content/notice");
    };
    GetPlans = async () => {
        return await this.api.get("/content/plan");
    };
}

const contentService = new Content(api);
export default contentService;
