import ErrorHandler from "@handlers/error"
import User from "@models/user"
import Session from "@models/user/session"
import { JWT_SECRET, JWT_SESSION_TIMEOUT } from "@server/config"
import { IResponse } from "@types_/response"
import IUser, { UserTypes } from "@types_/user"
import ISession from "@types_/user/session"
import Models from "@utils/models"
import { isEmail } from "class-validator"
import { timingSafeEqual } from "node:crypto"
import jwt from "jsonwebtoken"
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql"
import Context from "@types_/context"




@Resolver(_ => ISession)
export default class AuthResolver {
    handler: ErrorHandler

    constructor() {
        this.handler = new ErrorHandler(Models.user)
    }

    @Mutation(() => IResponse)
    async Login(
        @Arg("email", () => String) email: string,
        @Arg("password", () => String) password: string
    ) {
        if (!isEmail(email)) {
            return this.handler.error("Invalid email. Enter an email with valid format")
        }
        const user = await User.findOne({ email })
        if (!user) {
            return this.handler.error("Invalid User. Please check the credentials")
        }
        if (!timingSafeEqual(Buffer.from(user.password!), Buffer.from(password))) {
            return this.handler.error("Passwords do not match. Please check the credentials")
        }
        const createdAt = Date.now()
        const token = jwt.sign({
            user: user._id.toString(),
            createdAt
        }, JWT_SECRET, { expiresIn: JWT_SESSION_TIMEOUT })
        const session = await Session.create({
            user: user._id,
            createdAt,
            token,
            expiresAt: Date.now() + 7 * 86400 * 1000
        })
        if (!session) {
            return this.handler.error("Internal Server Error. Please try after sometime")
        }
        return this.handler.success(session)
    }

    @Mutation(() => IResponse)
    async Register(
        @Arg("user", () => IUser) input: IUser
    ) {
        delete input._id
        delete input.__v
        if (!input.role) {
            input.role = UserTypes.participant
        }
        else if (input.role === UserTypes.admin) {
            return this.handler.error("Invalid Role.")
        }
        if (!isEmail(input.email)) {
            return this.handler.error("Invalid email. Enter an email with valid format")
        }
        if ((await User.findOne({ email: input.email }))) {
            return this.handler.error("User already exists. Try to login")
        }
        const user = await User.create(input)
        if (!user) {
            return this.handler.error("Internal server error. Please try again!")
        }
        const createdAt = Date.now()
        const token = jwt.sign({
            user: user._id.toString(),
            createdAt
        }, JWT_SECRET, { expiresIn: JWT_SESSION_TIMEOUT })
        const session = await Session.create({
            user: user._id,
            createdAt,
            token,
            expiresAt: Date.now() + 7 * 86400 * 1000
        })
        if (!session) {
            return this.handler.error("Internal Server Error. Please try after sometime")
        }
        return this.handler.success(session)
    }

    @Query(() => IResponse)
    async Session(@Ctx() { req }: Context) {
        const headers = req.headers
        if (!headers.authorization) {
            return this.handler.error("Invalid Session!")
        }
        const auth = headers.authorization.split(" ")
        if (auth[0]! == "Bearer") {
            return this.handler.error("Invalid Auth Token!")
        }
        const session = await Session.find({ token: auth[1] }).populate("user").exec()
        if(!session) {
            return this.handler.error("Session not found")
        }
        return this.handler.success(session)
    }
}