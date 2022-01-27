import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import config from "../config/index.js";
import routes from "../api/index.js";
import cors from 'cors';
export default (app) => {
    const whitelist = ["http://localhost:3000"];
    const corsOptions = {
        origin: function (origin, callback) {
            const isWhitelisted = whitelist.indexOf(origin) !== -1;
            callback(null, isWhitelisted);
        },
        credentials: true,
    };
  
    app.use("/uploads", express.static("uploads"));

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(path.resolve(), "public")));

    // API Route 설정
    app.use(config.api.prefix, routes());
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
