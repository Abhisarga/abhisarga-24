import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";
import { type Time } from "@types_";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { Field, ObjectType } from "type-graphql";
import IUser from ".";
import { JwtPayload } from "jsonwebtoken";

const handler = new ErrorHandler(Models.session)

export interface Payload extends JwtPayload {
    user: string
    createdAt: Time
}

@ObjectType()
export default class ISession extends IMongoDocument {
    @Field(() => IUser)
    @prop({
        required: handler.fieldRequired("user"),
        ref: () => IUser
    })
    user!: IUser
    
    @Field(() => String)
    @prop({
        required: handler.fieldRequired("token"),
        type: () => String
    })
    token!: string

    @Field(() => Date)
    @prop({
        required: handler.fieldRequired("endsAt"),
        type: () => Date
    })
    expiresAt!: Time
}

export type SessionType = typeof ISession