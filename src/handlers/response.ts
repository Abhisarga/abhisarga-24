import { ResponseStatus, ResponseType } from "@types_/response";

export default class ResponseHandler {
    static success = (data: ResponseType) => ({ 
        status: ResponseStatus.success, 
        data
    })

    static error = (data: ResponseType) => ({
        status: ResponseStatus.error,
        data
    })

    constructor() {}

    success = (data: ResponseType) => ({ 
        status: ResponseStatus.success, 
        data 
    })

    error = (data: ResponseType) => ({
        status: ResponseStatus.error,
        data
    })
}