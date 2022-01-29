import api from "../utils/api";

class Project {
    constructor() {
        this.api = api;
    }
    // getProject
    GetProject = async () => {
     
            const project = await this.api.get(`/project`);
            return project
        
    };
    getPhotoByProjectId = async (projectId) => {
        const Photos = await this.api.get(`/project`, projectId);

        return Photos;
    };
}

const projectService = new Project(api);
export default projectService;
