import { Router } from "express";
import { Member as memberModel } from "../../models/member.js";
import { Photo as photoModel } from "../../models/photo.js";
import { photoService } from "../../services/photo.js";
import { Project as projectModel } from "../../models/project.js";

const route = Router();
export default (app) => {
    app.use("/project", route);
    route.get("/", async (req, res) => {
        const projects = await projectModel.find();
        const photoServiceInstance = new photoService(photoModel);
        const photos = await photoServiceInstance.photoModel.find().limit(10);
        return res.status(200).json({ projects, photos });
    });

    route.get("/:id", async (req, res) => {
        const projectId = req.params.id;
        const projects = await projectModel.find();

        const photoServiceInstance = new photoService(photoModel);
        if (projectId === `1`) {
            const photos = await photoServiceInstance.photoModel.find().limit(10);

            return res.status(200).json({ projects,photos });
        }

        const photos = await photoServiceInstance.findByProjectId(projectId);

        return res.status(200).json({ projects,photos });
    });
};
