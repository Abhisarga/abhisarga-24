import { ErrorHandler } from "@handlers/error";
import Models from "@utils/models";

export default class AchievementHandler extends ErrorHandler {
    constructor() {
        super(Models.achievement)
    }
}