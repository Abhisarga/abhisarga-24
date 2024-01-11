import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { Field, ObjectType } from "type-graphql";
import Socials from "../user/socials";
import IPerson from "../user/person";

const handler = new ErrorHandler(Models.club)

@ObjectType()
export default class IClub extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name")
    })
    name!: string

    @Field(() => String, { nullable: true })
    @prop()
    abbreviation?: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("description")
    })
    description!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("logo")
    })
    logo!: string

    @Field(() => Socials)
    @prop({
        required: handler.fieldRequired("socials")
    })
    socials!: Socials

    @Field(() => IPerson)
    @prop({
        required: handler.fieldRequired("")
    })
    lead!: IPerson

    coLeads!: IPerson[]

    representative?: IPerson
}