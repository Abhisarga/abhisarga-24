import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { IsPhone } from "@utils/validator";
import { IsEmail, IsEnum } from "class-validator";
import { Field, ObjectType, registerEnumType } from "type-graphql";

const handler = new ErrorHandler(Models.user)

export enum UserTypes {
    participant = "participant",
    admin = "admin",
    clubLead = "club-lead",
    
}

registerEnumType(UserTypes, {
    name: "UserType"
})

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

    @IsEnum(UserTypes)
    @Field(() => UserTypes)
    @prop({
        default: UserTypes.participant,
        enum: Object.values(UserTypes)
    })
    type!: UserTypes
}

export type UserType = typeof IUser