import ErrorHandler from "@handlers/error"
import User from "@models/user"
import Session from "@models/user/session"
import { IResponse } from "@types_/response"
import Models from "@utils/models"
import { IsEmail, isEmail } from "class-validator"
import { timingSafeEqual } from "crypto"
import { Arg, Field, InputType, Mutation, Resolver } from "type-graphql"
import jwt from "jsonwebtoken"
import { JWT_SECRET, JWT_SESSION_TIMEOUT } from "@server/config"

@InputType()
class LoginInput {
    @IsEmail()
    @Field(() => String)
    email!: string

    @Field(() => String)
    password!: string
}

@Resolver()
export default class AuthResolver {
    handler: ErrorHandler

    constructor() {
        this.handler = new ErrorHandler(Models.user)
    }

    @Mutation(() => IResponse)
    async login(
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
}