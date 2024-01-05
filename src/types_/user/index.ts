import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { IsPhone } from "@utils/validator";
import { IsEmail } from "class-validator";
import { Field, ObjectType } from "type-graphql";

const handler = new ErrorHandler(Models.user)

@ObjectType()
export default class IUser extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name")
    })
    name!: string

    @IsEmail({}, { message: handler.fieldInvalid("email") })
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("email"),
        unique: true
    })
    email!: string

    @IsPhone({ message: handler.fieldInvalid("phone") })
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("phone"),
        unique: true

    })
    phone!: string

    @Field(() => String)
    @prop({ required: handler.fieldRequired("phone") })
    password!: string

    @Field(() => String)
    @prop({ required: handler.fieldRequired("college") })
    college!: string
}

export type UserType = typeof IUser