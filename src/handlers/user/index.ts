import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class UserHandler extends ErrorHandler {
    constructor() {
        super(Models.user)
    }
}