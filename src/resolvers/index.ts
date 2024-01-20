import EventResolver from "./club/event";
import SponsorResolver from "./sponsor";
import UserResolver from "./user";
import AuthResolver from "./user/auth";

export const resolvers = [
    UserResolver,
    AuthResolver,
    EventResolver,
    SponsorResolver
] as const