import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class InstituteHandler extends ErrorHandler {
    constructor() {
        super(Models.institute)
    }
}