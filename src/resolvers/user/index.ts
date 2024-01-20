import ErrorHandler from "@handlers/error";
import Person from "@models/user/person";
import { IResponse } from "@types_/response";
import IUser from "@types_/user";
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
    async User() {
        return { name: "some"}
    }

    @Query(() => IResponse)
    async Person(
        @Arg("id", () => String) id: Types.ObjectId
    ) {
        const person = await Person.findById(id)
        if(!person) {
            
        }
    }
}