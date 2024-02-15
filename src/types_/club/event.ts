import ErrorHandler from "@handlers/error";
import { prop, type Ref } from "@typegoose/typegoose";
import { type Time } from "@types_";
import IClub from "@types_/club";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { Field, InputType, ObjectType } from "type-graphql";

export enum EventModes {
    online = "online",
    offline = "offline",
    hybrid = "hybrid"
}

const handler = new ErrorHandler(Models.event)

@InputType("EventRoundInput")
@ObjectType()
export class EventRound {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("round.number"),
        type: () => String
    })
    name!: string // Can be Round 1 or 1

    @Field(() => EventModes)
    @prop({
        required: handler.fieldRequired("round.mode"),
        type: () => String,
        enum: Object.values(EventModes)
    })
    mode!: EventModes

    @Field(() => String)
    @prop({
        type: () => String
    })
    description?: string

    @Field(() => Date)
    @prop({
        required: handler.fieldRequired("round.start"),
        type: () => String
    })
    start!: Time

    @Field(() => Date)
    @prop({
        required: handler.fieldRequired("round.end"),
        type: () => String
    })
    end!: Time
}

@InputType("EventOrganizerInput")
@ObjectType()
export class EventOrganizer {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("organizer.name"),
        type: () => String
    })
    name!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("organizer.phone"),
        type: () => String
    })
    phone!: string
}

@ObjectType()
export default class IEvent extends IMongoDocument {

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name"),
        type: () => String
    })
    name!: string

    @Field(() => IClub)
    @prop({
        ref: () => IClub,
        required: handler.fieldRequired("club")
    })
    club!: Ref<IClub>

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("description"),
        type: () => String
    })
    description!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("poster"),
        type: () => String
    })
    poster!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("registrationLink"),
        type: () => String
    })
    registrationLink!: string

    @Field(() => [EventRound])
    @prop({
        required: handler.fieldRequired("rounds"),
        type: () => String
    })
    rounds!: EventRound[] | string

    @Field(() => Number)
    @prop({
        required: handler.fieldRequired("rounds"),
        type: () => Number
    })
    prizePool!: number

    @Field(() => [EventOrganizer])
    @prop({
        type: () => String,
        required: handler.fieldRequired("organizers")
    })
    organizers!: EventOrganizer[] | string
}


@InputType()
export class EventInput extends IMongoDocument {

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name"),
        type: () => String
    })
    name!: string

    @Field(() => String)
    @prop({
        ref: () => IClub,
        required: handler.fieldRequired("club")
    })
    club!: Ref<IClub> | string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("description"),
        type: () => String
    })
    description!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("poster"),
        type: () => String
    })
    poster!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("registrationLink"),
        type: () => String
    })
    registrationLink!: string

    @Field(() => [EventRound])
    @prop({
        required: handler.fieldRequired("rounds"),
        type: () => [EventRound]
    })
    rounds!: EventRound[]

    @Field(() => Number)
    @prop({
        required: handler.fieldRequired("rounds"),
        type: () => Number
    })
    prizePool!: number

    @Field(() => [EventOrganizer])
    @prop({
        type: () => [EventOrganizer],
        required: handler.fieldRequired("event.organizers")
    })
    organizers!: EventOrganizer[] | string // take the required details
}

export type EventType = typeof IEvent