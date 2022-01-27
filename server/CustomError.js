class CustomError extends Error {
    constructor(type = "GENERIC", status = 400, ...params) {
        super(...params);
        console.log('CustomError',type)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
        console.log('CustomError',status)
        this.type = type;
        this.status = status;
    }
}

export { CustomError };
