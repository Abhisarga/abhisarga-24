import ErrorHandler from "@handlers/error";
import Event from "@models/club/event";
import IEvent from "@types_/club/event";
import { IResponse } from "@types_/response";
import Models from "@utils/models";
import { Types } from "mongoose";
import { Arg, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql"

@ObjectType()
class EventResponse extends IResponse {
    @Field(() => IEvent, { nullable: true })
    declare data: IEvent;
}

@ObjectType()
class MultiEventResponse extends IResponse {
    @Field(() => [IEvent])
    declare data: IEvent[];
}

@Resolver(_ => IEvent)
export default class EventResolver {
    handler: ErrorHandler

    constructor() {
        this.handler = new ErrorHandler(Models.event)
    }

    @Mutation(() => EventResponse)
    async CreateEvent(
        @Arg("event", () => IEvent) input: IEvent
    ) {
        delete input._id
        delete input.__v

        const event = await Event.create(input)
        if(!event) {
            return this.handler.error(null)
        }
        return this.handler.success(event)
    }

    @Query(() => EventResponse)
    async Event(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const event = await Event.findById(id)
        if(!event) {
            return this.handler.error(null)
        }
        return this.handler.success(event)
    }

    @Query(() => MultiEventResponse)
    async AllEvents() {
        return this.handler.success((await Event.find()) || [])
    }
}