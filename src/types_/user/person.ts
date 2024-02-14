import ErrorHandler from "@handlers/error"
import { prop } from "@typegoose/typegoose"
import { IMongoDocument } from "@types_/mongo"
import { IsEnum } from "class-validator"
import { Field, InputType, ObjectType } from "type-graphql"
import Socials from "./socials"

export enum PersonTypes {
    lead = "lead",
    coLead = "co-lead",
    representative = "representative",
    sdcTeam = "SDC Team",
    slcTeam = "SLC Team",
    designTeam = "Design Team",
    sponsorshipTeam = "Sponsorship Team",
    proShowsTeam = "Pro Shows Team",
    stageTeam = "Stage & Sound Team",
    stallsTeam = "Stalls Team",
    hospitalityTeam = "Hospitality Team",
    marketingTeam = "marketingTeam",
    invitationTeam = "Invitation Team",
    transportationTeam = "Transportation Team",
    decorationTeam = "Decoration Team",
    logisticsTeam = "Logistics Team",
    techTeam = "Tech Team"
}

const handler = new ErrorHandler("person")

@InputType("PersonInput")
@ObjectType()
export default class IPerson extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name"),
        type: () => String
    })
    name!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("email"),
        type: () => String
    })
    email!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("phone"),
        type: () => String
    })
    phone!: string

    @IsEnum(PersonTypes)
    @Field(() => PersonTypes)
    @prop({
        enum: Object.values(PersonTypes),
        type: () => String
    })
    type!: PersonType

    @Field(() => Socials, { nullable: true })
    @prop({
        required: handler.fieldRequired("socials"),
        type: () => Socials
    })
    socials!: Socials

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("profilePhoto"),
        type: () => String
    })
    profilePhoto!: string
}

export type PersonType = typeof IPerson