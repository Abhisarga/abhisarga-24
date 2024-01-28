import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class SessionHandler extends ErrorHandler {
    constructor() {
        super(Models.session)
    }
}