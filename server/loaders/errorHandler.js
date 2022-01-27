import { CustomError } from "../CustomError.js";
import createError from "http-errors";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";

export default (app) => {
    console.log("errorhandler");
    app.use(function (req, res, next) {

        next(createError(404));
    });
    app.use(function handleMongoError(error, req, res, next) {
        if (error instanceof mongoose.Error) {
            return res.status(400).json({ type: "MongoError", message: error.message });
        }
        next(error);
    });
    app.use(function handleJwtError(error, req, res, next) {
        if (error instanceof jsonwebtoken.TokenExpiredError) {
            return res.status(401).json({ type: "TokenExpiredError", message: error.message, error });
        }
        if (error instanceof jsonwebtoken.JsonWebTokenError) {
            return res.status(401).json({ type: "JsonWebTokenError", message: error.message ,error });
        }
        next(error);
    });
    app.use(function handleCustomError(error, req, res, next) {
        if (error instanceof CustomError) {
            const { status, type, message } = error;
            console.log("CustomError");
            return res.status(status).json({ type, message ,error});
        }
        next(error);
    });
    app.use(function (error, req, res, next) {
        res.status(400).json({ message: error.message ,error });
    });
};
