import UserHandler from "@handlers/user";
import IUser from "@types_/user";
import { Query, Resolver } from "type-graphql";

@Resolver()
export default class UserResolver {
    handler = new UserHandler()

    constructor() {
        this.handler = new UserHandler()
    }

    @Query(() => IUser, { nullable: true })
    get() {
        return { name: { first: "some"}}
    }
}