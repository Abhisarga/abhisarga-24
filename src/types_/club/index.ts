import ErrorHandler from "@handlers/error";
import { Ref, prop } from "@typegoose/typegoose";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { Field, InputType, ObjectType } from "type-graphql";
import Socials from "../user/socials";
import IPerson from "../user/person";
import ITheme from "./theme";

const handler = new ErrorHandler(Models.club)

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
    socials!: Socials | string

    @Field(() => IPerson)
    @prop({
        required: handler.fieldRequired("lead"),
        ref: () => IPerson
    })
    lead!: Ref<IPerson>

    @Field(() => IPerson)
    @prop({
        required: handler.fieldRequired("coLead"),
        ref: () => IPerson
    })
    coLead!: Ref<IPerson>

    @Field(() => IPerson)
    @prop({
        ref: () => IPerson
    })
    representative?: IPerson

    @Field(() => ITheme)
    @prop({
        ref: () => ITheme
    })
    theme!: ITheme
}

@InputType()
export class ClubInput extends IMongoDocument {
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

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("lead"),
        type: () => IPerson
    })
    lead!: Ref<IPerson> | string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("coLead"),
        ref: () => IPerson
    })
    coLead: Ref<IPerson> | string

    @Field(() => String, { nullable: true })
    @prop({
        ref: () => IPerson
    })
    representative?: IPerson | string

    @Field(() => String)
    @prop({
        ref: () => ITheme
    })
    theme!: ITheme | string
}

export type ClubType = typeof IClub