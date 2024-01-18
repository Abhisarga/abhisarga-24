import EventResolver from "./club/event";
import UserResolver from "./user";
import AuthResolver from "./user/auth";

export const resolvers = [
    UserResolver,
    AuthResolver,
    EventResolver
] as const