import { getModelForClass } from "@typegoose/typegoose";
import ISession, { SessionType } from "@types_/user/session";

const Session = getModelForClass<SessionType>(ISession)
export default Session