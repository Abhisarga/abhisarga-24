import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class EducationHandler extends ErrorHandler {
    constructor() {
        super(Models.education)
    }
}