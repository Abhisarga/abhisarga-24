import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class CompanyHandler extends ErrorHandler {
    constructor() {
        super(Models.company)
    }
}