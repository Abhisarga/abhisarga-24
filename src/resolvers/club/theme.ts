import ErrorHandler from "@handlers/error";
import ITheme from "@types_/club/theme";
import { IResponse } from "@types_/response";
import Models from "@utils/models";
import { Types } from "mongoose";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Theme from "@models/club/theme"

@Resolver(() => ITheme)
export default class ThemeResolver {
    handler: ErrorHandler

    constructor() {
        this.handler = new ErrorHandler(Models.theme)
    }

    @Query(() => IResponse)
    async Theme(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const theme = await Theme.findById(id)
        if (!theme) {
            return this.handler.error(this.handler.STATUS_404)
        }
        return this.handler.success(theme)
    }

    @Mutation(() => IResponse)
    async CreateTheme(
        @Arg("input", () => ITheme) input: ITheme
    ) {
        delete input._id
        delete input.__v

        const theme = await Theme.create(input)
        if(!theme) {
            return this.handler.error("Bad Request! Please try again.")
        }
        return this.handler.success(theme)
    }

    @Query(() => [IResponse])
    async AllThemes() {
        const themes = await Theme.find()
        if (!themes) {
            return this.handler.error("No themes found.")
        }
        return this.handler.success(themes)
    }
}