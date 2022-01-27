import config from "./config/index.js";
import express from "express";
import logger from "./loaders/logger.js";
import loader from "./loaders/index.js";

/*
구현해야할것들
방문자수,조회수 구현
방문자수 = Counter에 추가? log에? 

조회수 = 각 요소에 추가

쿠키(?)이용하면될듯함.




*/

const app = express();

loader(app);

const server = app
    .listen(config.port, () => {
        logger.info(`
    #####################IBDA#######################
    🛡️  Server listening on port: ${config.port} 🛡️
    ################################################
    `);
    })
    .on("error", (err) => {
        console.log("error", ":serve.js");
        logger.error(err);

        process.exit(1);
    });

export { server };
