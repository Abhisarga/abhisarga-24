import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class CourseHandler extends ErrorHandler {
    constructor() {
        super(Models.course)
    }
}