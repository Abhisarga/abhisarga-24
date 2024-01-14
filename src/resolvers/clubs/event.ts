import ErrorHandler from "@handlers/error";
import Session from "@models/user/session";
import User from "@models/user"
import { JWT_SECRET, JWT_SESSION_TIMEOUT } from "@server/config";
import { IResponse } from "@types_/response";
import Models from "@utils/models";
import { isEmail } from "class-validator";
import { timingSafeEqual } from "crypto";
import jwt from "jsonwebtoken"
import { Arg, Mutation, Resolver } from "type-graphql";


@Resolver()
class Event{
    handler : ErrorHandler
    constructor(){
        this.handler = new ErrorHandler(Models.user);
    }
    @Mutation(()=>IResponse)
    async Eventlogin(
        @Arg("email",()=>String) email: string
        @Arg("password",()=>String) password : string 
    ){
        if(!isEmail(email)){
            return this.handler.error("Invalid Email. Enter an email with valid format")
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