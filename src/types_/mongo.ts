import { prop } from "@typegoose/typegoose";
import type { Time } from "@types_";
import { IsDate } from "class-validator";
import { Types } from "mongoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class IMongoDocument {
    @Field(() => String)
    @prop({ required: true })
    _id!: Types.ObjectId

    @prop({ select: false })
    __v?: number

    @IsDate()
    @Field(() => Date)
    @prop({
        default: Date.now
    })
    createdAt!: Time
}