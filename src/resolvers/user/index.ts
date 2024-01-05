import ErrorHandler from "@handlers/error";
import IUser from "@types_/user";
import Models from "@utils/models";
import { Query, Resolver } from "type-graphql";

@Resolver()
export default class UserResolver {
    handler = new ErrorHandler(Models.user)

    constructor() {
        this.handler = new ErrorHandler(Models.user)
    }

    @Query(() => IUser, { nullable: true })
    get() {
        return { name: { first: "some"}}
    }
}