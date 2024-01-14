import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { Field, ObjectType } from "type-graphql";

const handler = new ErrorHandler(Models.theme)

@ObjectType()
export default class ITheme extends IMongoDocument {
    
    @Field(() => String)
    @prop({
        type: () => String,
        required: handler.fieldRequired("name")
    })
    name!: string

    @Field(() => String)
    @prop()
    images!: string[]
}

export type ThemeType = typeof ITheme