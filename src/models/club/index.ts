import { getModelForClass } from "@typegoose/typegoose";
import IClub, { ClubType } from "@types_/club";

const Event = getModelForClass<ClubType>(IClub)
export default Event