import { Field, ObjectType, registerEnumType } from "type-graphql";
import { IMongoDocument } from "./mongo";
import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";

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

registerEnumType(SponsorTypes, {
    name: "SponsorType"
})

const handler = new ErrorHandler("sponsor")

@ObjectType()
export default class ISponsor extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name")
    })
    name!: string

    @Field(() => String)
    @prop({

    })
    logo!: string
    type!: SponsorTypes
    url?: string
}