import ErrorHandler from "@handlers/error";
import Session from "@models/user/session";
import { JWT_SECRET } from "@server/config";
import IUser from "@types_/user";
import { Payload } from "@types_/user/session";
import Models from "@utils/models";
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
    handler: ErrorHandler = new ErrorHandler(Models.session)
) => async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = (req.headers.authorization! as string || "").split(" ")
    if(!authHeader.length) {
        return res.status(422).send(handler.error(handler.MISSING_AUTH_HEADER))
    }
    if(authHeader.length > 3 || !authHeader[0].startsWith("Bearer")) {
        return res.status(422).send(handler.error("Invalid Authorization Header! Please make that authorization type is bearer"))
    }
    const session = await Session.findOne({token: authHeader[1]}).populate("user")
    if(!session) {
        return res.status(422).send(handler.error("Session not found! Please try to login again."))
    }
    try {
        const decoded = jwt.verify(authHeader[1], JWT_SECRET) as Payload
        if(decoded.user === (session.user as IUser)._id.toString()) {
            res.locals.session = session
            next()
        }
        else {
            return res.status(422).send(handler.error("Invalid user session! Please try to login again."))
        }
    }
    catch(err) {
        if(err instanceof jwt.TokenExpiredError) {
            return res.status(401).send(handler.error("Session timed out! Please try to login again."))
        }
        else {
            return res.status(422).send(handler.error("Session not found! Please try to login again."))
        }
    }
}