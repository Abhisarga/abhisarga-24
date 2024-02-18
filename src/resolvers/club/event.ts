import ErrorHandler from "@handlers/error";
import Event from "@models/club/event";
import IClub from "@types_/club";
import IEvent, { EventInput, EventOrganizer, EventRound } from "@types_/club/event";
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
    @Field(() => [IEvent], { defaultValue: [] })
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
        @Arg("event", () => EventInput) input: IEvent
    ) {
        delete input._id
        delete input.__v
        delete input.createdAt

        const event = await Event.create({
            ...input,
            rounds: JSON.stringify(input.rounds),
            organizers: JSON.stringify(input.organizers),
        })
        if (!event) {
            return this.handler.error(null)
        }
        return this.handler.success({
            ...event["_doc"] as IEvent,
            rounds: JSON.parse(event.rounds as string) as EventRound[],
            organizers: JSON.parse(event.organizers as string) as EventOrganizer[]
        } as IEvent)
    }

    @Query(() => EventResponse)
    async Event(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const event = await Event.findById(id).populate([{
            path: "club",
            populate: ["lead", "coLead", "representative", "theme"]
        }]).exec()
        if (!event) {
            return this.handler.error(null)
        }
        console.log(event.club)
        return this.handler.success({
            ...event["_doc"] as IEvent,
            club: {
                ...event.club["_doc"] as IClub,
                socials: JSON.parse((event.club as IClub).socials as string),
                theme: {
                    ...((event.club as IClub).theme)["_doc"] as IClub["theme"],
                    images: JSON.parse((((event.club as IClub).theme) as IClub["theme"]).images as string),
                    createdAt: new Date((event.club as IClub).theme.createdAt).toISOString()
                },
                createdAt: new Date((event.club as IClub).createdAt).toISOString()
            },
            rounds: (JSON.parse(event.rounds as string) as EventRound[]).map(e => ({
                ...e,
                start: new Date(e.start),
                end: new Date(e.end)
            })),
            organizers: JSON.parse(event.organizers as string) as EventOrganizer[],
            createdAt: new Date(event.createdAt)
        } as IEvent)
    }

    @Query(() => MultiEventResponse)
    async AllEvents() {
        return this.handler.success((await Event.find()).map(event => ({
            ...event, 
            rounds: JSON.parse(event.rounds as string) as EventRound[],
            organizers: JSON.parse(event.organizers as string) as EventOrganizer[]
        })) || [])
    }
}