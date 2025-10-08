class ApiError extends Error{
    constructor(
        statusCode,
        message = 'Something went wrong',
        errors = [],
        statck = ""
        
    ) {
        super(messagee);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.data = null;
        this.success = false;

        if (statck) {
            this.stack = statck;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}


export { ApiError }  