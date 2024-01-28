import ErrorHandler from "@handlers/error";
import Person from "@models/user/person";
import { IResponse } from "@types_/response";
import IUser from "@types_/user";
import User from "@models/user"
import Models from "@utils/models";
import { Types } from "mongoose";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver(() => IUser)
export default class UserResolver {
    handler = new ErrorHandler(Models.user)

    constructor() {
        this.handler = new ErrorHandler(Models.user)
    }

    @Query(() => IResponse)
    async User(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const user = await User.findById(id)
        if (!user) {
            return this.handler.error("Bad Request! Please try again.")
        }
        return this.handler.success(user)
    }

    @Query(() => IResponse)
    async Person(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const person = await Person.findById(id)
        if (!person) {
            return this.handler.error("Bad Request! Please try again.")
        }
        return this.handler.success(person)
    }
}