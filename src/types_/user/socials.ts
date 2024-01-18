import ErrorHandler from "@handlers/error"
import { prop } from "@typegoose/typegoose"
import { Field, InputType, ObjectType } from "type-graphql"

const handler = new ErrorHandler("socials")

@InputType("SocialsInput")
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