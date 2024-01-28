import { getModelForClass } from "@typegoose/typegoose";
import IEvent, { EventType } from "@types_/club/event";

const Event = getModelForClass<EventType>(IEvent)
export default Event