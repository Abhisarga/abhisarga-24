import ErrorHandler from "@handlers/error"
import { prop } from "@typegoose/typegoose"
import { Field, ObjectType } from "type-graphql"

const handler = new ErrorHandler("socials")

@ObjectType()
export default class Socials {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("instagram"),
        type: () => String
    })
    instagram!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("linkedin"),
        type: () => String
    })
    linkedin!: string
}