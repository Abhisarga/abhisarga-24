import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";
import { IMongoDocument } from "./mongo";

export enum SponsorTypes {
    titleSponsor = "Title Sponsor",
    associateTitleSponsor = "Associate Title Sponsor",
    diamondSponsor = "Diamond Sponsor",
    platinumSponsor = "Platinum Sponsor",
    goldSponsor = "Gold Sponsor",
    silverSponsor = "Silver Sponsor",
    foodAndBeveragesPartner = "Food & Beverages Partner",
    bankingPartner = "Banking Partner",
    travelPartner = "Travel Partner",
    deliveryPartner = "Delivery Partner",
    educationalPartner = "Educational Partner",
    credentialPartner = "Credential Partner",
    cryptoPartner = "Crypto Partner",
    mediaAndDigitalPartner = "Media & Digital Partner",
    eventPartner = "Event Partner"
}

const handler = new ErrorHandler("sponsor")

@InputType("SponsorInput")
@ObjectType()
export default class ISponsor extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name"),
        type: () => String
    })
    name!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name"),
        type: () => String
    })
    logo!: string

    @Field(() => SponsorTypes)
    @prop({
        required: handler.fieldRequired("name"),
        enum: Object.values(SponsorTypes),
        type: () => String,
    })
    type!: SponsorTypes

    @Field(() => String, { nullable: true })
    @prop()
    url?: string
}

export type SponsorType = typeof ISponsor