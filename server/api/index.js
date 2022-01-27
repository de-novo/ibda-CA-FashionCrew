import { Router } from "express";
import home from "./routes/home.js";
import project from "./routes/project.js";
import member from "./routes/member.js";
import content from "./routes/content.js";
import admin from "./routes/admin.js";
export default () => {
    const app = Router();
    home(app);
    project(app);
    member(app);
    content(app);
    admin(app)
    return app;
};
