import ErrorHandler from "@handlers/error";
import { Ref, prop } from "@typegoose/typegoose";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { Field, InputType, ObjectType } from "type-graphql";
import Socials from "../user/socials";
import IPerson from "../user/person";

const handler = new ErrorHandler(Models.club)

@InputType("ClubInput")
@ObjectType()
export default class IClub extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name"),
        type: () => String
    })
    name!: string

    @Field(() => String, { nullable: true })
    @prop({
        type: () => String
    })
    abbreviation?: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("description"),
        type: () => String
    })
    description!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("logo"),
        type: () => String
    })
    logo!: string

    @Field(() => Socials)
    @prop({
        required: handler.fieldRequired("socials"),
        type: () => String
    })
    socials!: Socials

    @Field(() => IPerson)
    @prop({
        required: handler.fieldRequired("lead"),
        type: () => String
    })
    lead!: IPerson

    @Field(() => [IPerson], { nullable: true })
    @prop({
        default: [],
        ref: () => IPerson
    })
    coLeads!: Ref<IPerson>[]

    @Field(() => IPerson)
    @prop({
        ref: () => IPerson
    })
    representative?: IPerson
}

export type ClubType = typeof IClub