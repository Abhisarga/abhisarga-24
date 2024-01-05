import { prop } from "@typegoose/typegoose";
import ResponseHandler from "./response";
import Models from "@utils/models";


export default class ErrorHandler extends ResponseHandler {
    modelName: string
    constructor(modelName: Models|string) {
        super()
        this.modelName = modelName
    }

    static fieldRequired = (field: string, model: string): [boolean, string] => [
        true, 
        `The ${field} of the ${model} is required.`
    ]

    static mongooseInvalid = (
        field: string, 
        model: string, 
        arg?: string
    ): [boolean, string] => [
        true,
        `The ${field} of the ${model} is invalid.`+arg
    ]

    static required = (field: string, modelName: string) => prop({ required: ErrorHandler.fieldRequired(field, modelName) })

    fieldRequired = (field: string): [boolean, string] => [
        true, 
        `The ${field} of the ${this.modelName} is required.`
    ]

    required = (field: string) => prop({ required: this.fieldRequired(field) })

    mongooseInvalid = (
        field: string,
        arg?: string
    ): [boolean, string] => [
        true,
        `The ${field} of the ${this.modelName} is invalid. `+arg
    ]

    fieldInvalid = (
        field: string, 
        arg?: string
    ) => `The ${field} of the ${this.modelName} is invalid. `+arg

    readonly STATUS_404 = "Bad Request! Not found"
    readonly STATUS_408 = "Request Timeout. Please try again"
    readonly MISSING_AUTH_HEADER = "Authorization header missing! Please make sure to provide the Authorization Header"
}