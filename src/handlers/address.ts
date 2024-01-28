import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class AddressHandler extends ErrorHandler {
    constructor() {
        super(Models.address)
    }
}