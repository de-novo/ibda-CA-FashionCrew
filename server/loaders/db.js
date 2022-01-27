import config from "../config/index.js";
import mongoose from "mongoose";

export default (app) => {
    if (process.env.NODE_ENV !== "test") {
        const connection = mongoose.connect(config.DB_URL);
    }
};
