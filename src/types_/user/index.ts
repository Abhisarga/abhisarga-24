import ErrorHandler from "@handlers/error";
import { Ref, prop } from "@typegoose/typegoose";
import IClub from "@types_/club";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { IsPhone } from "@utils/validator";
import { IsEmail, IsEnum } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";

const handler = new ErrorHandler(Models.user)

export enum UserTypes {
    participant = "participant",
    admin = "admin",
    clubLead = "club-lead",
}

@InputType("UserInput")
@ObjectType()
export default class IUser extends IMongoDocument {
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("name"),
        type: () => String
    })
    name!: string

    @IsEmail({}, { message: handler.fieldInvalid("email") })
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("email"),
        unique: true,
        type: () => String
    })
    email!: string

    @IsPhone({ message: handler.fieldInvalid("phone") })
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("phone"),
        unique: true,
        type: () => String
    })
    phone!: string

    @Field(() => String, { nullable: true })
    @prop({
        required: handler.fieldRequired("phone"),
        type: () => String
    })
    password!: string

    @Field(() => String)
    @prop({
        required: handler.fieldRequired("college"),
        type: () => String
    })
    college!: string

    @IsEnum(UserTypes)
    @Field(() => UserTypes, {
        defaultValue: UserTypes.participant,
        nullable: true
    })
    @prop({
        default: UserTypes.participant,
        enum: Object.values(UserTypes),
        type: () => String
    })
    role?: UserTypes

    @Field(() => IClub, { nullable: true})
    @prop({
        ref: () => IClub
    })
    club?: Ref<IClub>
}

export type UserType = typeof IUser