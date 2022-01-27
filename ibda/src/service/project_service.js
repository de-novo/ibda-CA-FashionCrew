import api from "../utils/api";

class Project {
    constructor() {
        this.api = api;
    }
    // getProject
    GetProjectPhoto = async (photoArray) => {
        const filtered = photoArray.fliter((item) => {
            return Number(item.project) === Number(this.project._id);
        });
    };
    getPhotoByProjectId = async (projectId) => {
        const Photos = await this.api.get(`/project`, projectId);

        return Photos;
    };
}

const projectService = new Project(api);
export default projectService;
