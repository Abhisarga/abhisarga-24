import ErrorHandler from "@handlers/error"
import { prop } from "@typegoose/typegoose"
import { IMongoDocument } from "@types_/mongo"
import { Field, ObjectType, registerEnumType } from "type-graphql"
import { IsEnum } from "class-validator"
import Socials from "./socials"

export enum PersonType {
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

registerEnumType(PersonType, {
    name: "PersonTypes"
})

const handler = new ErrorHandler("person")

@ObjectType()
export default class IPerson extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name")
    })
    name!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("email")
    })
    email!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("phone")
    })
    phone!: string

    @IsEnum(PersonType)
    @Field(() => PersonType)
    @prop({
        enum: Object.values(PersonType)
    })
    type!: PersonType

    @Field(() => Socials)
    @prop({
        required: handler.fieldRequired("socials")
    })
    socials!: Socials

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("profilePhoto")
    })
    profilePhoto!: string
}