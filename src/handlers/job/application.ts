import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class ApplicationHandler extends ErrorHandler {
    constructor() {
        super(Models.jobApplication)
    }
}