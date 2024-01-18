import { prop } from "@typegoose/typegoose";
import type { Time } from "@types_";
import { IsDate } from "class-validator";
import { Types } from "mongoose";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class IMongoDocument {
    @Field(() => String)
    @prop({
        required: true,
        default: () => new Types.ObjectId(),
        type: () => Types.ObjectId
    })
    _id?: Types.ObjectId;

    @prop({ select: false, type: () => Number })
    __v?: number;

    @IsDate()
    @Field(() => Date)
    @prop({ default: Date.now, type: () => Date })
    createdAt!: Time;
}