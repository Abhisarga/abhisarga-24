import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class WorkHandler extends ErrorHandler {
    constructor() {
        super(Models.work)
    }
}