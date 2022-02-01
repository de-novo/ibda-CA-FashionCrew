import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import config from "../config/index.js";
import routes from "../api/index.js";
import cors from "cors";
export default (app) => {
    const whitelist = ["http://localhost:3000","http://ibda-crew.com","http://www.ibda-crew.com","https://ibda-crew.com","https://www.ibda-crew.com"];
    const corsOptions = {
        origin: function (origin, callback) {
            const isWhitelisted = whitelist.indexOf(origin) !== -1;
            callback(null, isWhitelisted);
        },
        credentials: true,
    };
    const __dirname = path.resolve();
    app.use("/uploads", express.static("uploads"));

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(path.resolve(), "public")));
    // var filePath = "../ibda/build/index.html";
    // var resolvedPath = path.resolve(filePath);
    // console.log("resolvedPath", resolvedPath);
    // API Route 설정
    app.use(config.api.prefix, routes());
    app.use(express.static(path.join(__dirname, "../ibda/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../ibda/build", "index.html"));
    });
    // const __dirname = path.resolve();
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: true }));
    // app.use(cookieParser());

    // app.use(config.api.prefix, routes());
    // app.use(express.static(path.join(__dirname, "../client/build")));
    // app.get("*", (req, res) => {
    //     // res.send({message:'gd'})
    //     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    // });
};
