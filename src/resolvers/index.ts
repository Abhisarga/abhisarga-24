import UserResolver from "./user";
import AuthResolver from "./user/auth";

export const resolvers = [
    UserResolver,
    AuthResolver
] as const