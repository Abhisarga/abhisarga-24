import { getModelForClass } from "@typegoose/typegoose";
import IUser, { UserType } from "@types_/user";

const User = getModelForClass<UserType>(IUser)
export default User