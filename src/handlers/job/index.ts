import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class JobHandler extends ErrorHandler {
    constructor() {
        super(Models.job)
    }
}