import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class ProfileHandler extends ErrorHandler {
    constructor() {
        super(Models.profile)
    }
}