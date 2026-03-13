class ExpressError extends Error {
    constructor(statusCode, messsage){
        super();
        this.statusCode = statusCode;
        this.message = this.message;
    }
}

module.exports = ExpressError;