import api from "../utils/api";

class Member {
    constructor() {
        this.api = api;
    }
    // getProject
    GetMembers = async () => {
        return await this.api.get("/member");
    };
    getPhotoByMemberId = async (memberId) => {
        const Photos = await this.api.get("/member", memberId);

        return Photos;
    };
}

const memberService = new Member(api);
export default memberService;
