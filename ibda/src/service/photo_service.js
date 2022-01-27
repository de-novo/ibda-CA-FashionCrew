import api from "../utils/api";

class Photo {
    constructor() {
        this.api = api;
    }
    // getProject

    getPhotoByProjectId = async (projectId) => {
        if (!projectId) {
            const Photos = await this.api.get(`/project`);
            return Photos;
        }
        const Photos = await this.api.get(`/project/${projectId}`);

        return Photos;
    };

    getPhotoByUserId = async (userId) => {
        const Photos = await this.api.get("/project", userId);

        return Photos;
    };
}

const photoService = new Photo(api);
export default photoService;
