import EventResolver from "./club/event";
import ThemeResolver from "./club/theme";
import SponsorResolver from "./sponsor";
import UserResolver from "./user";
import AuthResolver from "./user/auth";
import ClubResolver from "./club";

export const resolvers = [
    UserResolver,
    AuthResolver,
    EventResolver,
    SponsorResolver,
    ThemeResolver,
    ClubResolver
] as const