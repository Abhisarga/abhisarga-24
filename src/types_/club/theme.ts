import ErrorHandler from "@handlers/error";
import { prop } from "@typegoose/typegoose";
import { IMongoDocument } from "@types_/mongo";
import Models from "@utils/models";
import { Field, InputType, ObjectType } from "type-graphql";

const handler = new ErrorHandler(Models.theme)

export enum ImagePosition {
    topLeft = "top-left",
    topRight = "top-right",
    bottomLeft = "bottom-left",
    bottomRight = "bottom-right"
}

@InputType("ThemeImageInput")
@ObjectType()
export class ThemeImage {
    @Field(() => String)
    @prop({
        type: () => String,
        required: handler.fieldRequired("theme.url")
    })
    url: string

    @Field(() => ImagePosition)
    @prop({
        type: () => String,
        enum: Object.values(ImagePosition),
        required: handler.fieldRequired("theme.position")
    })
    position: ImagePosition
}

@InputType("ThemeInput")
@ObjectType()
export default class ITheme extends IMongoDocument {
    
    @Field(() => String)
    @prop({
        type: () => String,
        required: handler.fieldRequired("name")
    })
    name!: string

    @Field(() => [ThemeImage], { defaultValue: [], nullable: true })
    @prop({
        type: () => [String]
    })
    images!: string[] | string
}

export type ThemeType = typeof ITheme