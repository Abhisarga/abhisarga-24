import ErrorHandler from "@handlers/error";
import Event from "@models/club/event";
import IEvent from "@types_/club/event";
import { IResponse } from "@types_/response";
import Models from "@utils/models";
import { Arg, Mutation, Resolver } from "type-graphql"

@Resolver()
export default class EventResolver {
    handler: ErrorHandler

    constructor() {
        this.handler = new ErrorHandler(Models.event)
    }

    @Mutation(() => IResponse)
    async createEvent(
        @Arg("event", () => IEvent) input: IEvent
    ) {
        delete input._id
        delete input.__v
        const event = await Event.create(input)
        if(!event) {
            return this.handler.error("Bad Request! Please try again.")
        }
        return this.handler.success(event)
    }
}