import { getModelForClass } from "@typegoose/typegoose";
import ISponsor, { SponsorType } from "@types_/sponsor";

const Sponsor = getModelForClass<SponsorType>(ISponsor)
export default Sponsor