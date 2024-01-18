import { getModelForClass } from "@typegoose/typegoose";
import IPerson, { PersonType } from "@types_/user/person";

const Person = getModelForClass<PersonType>(IPerson)
export default Person