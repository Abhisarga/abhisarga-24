import { getModelForClass } from "@typegoose/typegoose";
import ITheme, { ThemeType } from "@types_/club/theme";

const Event = getModelForClass<ThemeType>(ITheme)
export default Event