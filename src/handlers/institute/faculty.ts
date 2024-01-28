import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class FacultyHandler extends ErrorHandler {
    constructor() {
        super(Models.faculty)
    }
}