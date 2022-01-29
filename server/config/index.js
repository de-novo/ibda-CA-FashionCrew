import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error(`Couldn't find .env file`);
}

export default {
    port: parseInt(process.env.PORT, 10),
    // MongoDB URL
    DB_URL: process.env.DB_URL,
    //  API config
    api: {
        prefix: "/api",
    },

    // JWT Secret
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,

    //log
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },
    issuer: "De_novo",



    







};
