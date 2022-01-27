import api from "../utils/api";
// 어드민 페이지에서 사진삭제 추가 등 .

class Admin {
    constructor() {
        this.api = api;
    }
    // getProject

}

const adminService = new Admin(api);
export default adminService;
