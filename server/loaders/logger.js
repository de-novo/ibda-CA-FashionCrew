import winston from "winston";
import config from "../config/index.js";
import winstonDaily from "winston-daily-rotate-file";

const logDir = "logs";

const { combine, timestamp, prettyPrint, printf, label } = winston.format;

const logFormat = printf((info) => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const options = {
    file: {
        level: "info",
        datePattern: "YYYY-MM-DD",
        dirname: logDir,
        filename: `%DATE%.log`,
        handleExceptions: true,
        // json: false,
        // maxsize: 5242880, // 5MB
        maxFiles: 30,
        colorize: false,
        zippedArchive: true,
        format: combine(label({ label: "express" }), timestamp(), logFormat),
    },
    error: {
        level: "error",
        datePattern: "YYYY-MM-DD",
        dirname: logDir + "/error", // error.log 파일은 /logs/error 하위에 저장
        filename: `%DATE%.error.log`,
        maxFiles: 30,
        zippedArchive: true,
        handleExceptions: true,
    },
    console: {
        level: "debug",
        handleExceptions: true,
        json: false,
        colorize: true,
        format: combine(label({ label: "express" }), timestamp(), logFormat),
    },
};

const logger = winston.createLogger({
    format: combine(
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        logFormat,
        prettyPrint()
    ),
    transports: [
        new winstonDaily(options.file),
        // error 레벨 로그를 저장할 파일 설정
        new winstonDaily(options.error),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console(options.console));
}
export default logger;
