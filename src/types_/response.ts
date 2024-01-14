import { GraphQLScalarType } from "graphql"
import { Field, ObjectType } from "type-graphql"
import { Kind } from "graphql/language";

export type ResponseType = string | string[] | object | object[]

const AnyScalar = new GraphQLScalarType({
    name: "ResponseType",
    parseValue: (value: ResponseStatus) => {
        return value
    },
    serialize: (value: ResponseType) => value,
    parseLiteral: (ast) => {
        switch (ast.kind) {
            case Kind.STRING:
            return ast.value
            case Kind.LIST:
            case Kind.OBJECT:
                return ast
            default:
                return null
        }
    }
})

export enum ResponseStatus {
    success = "success",
    pending = "pending",
    error = "error"
}



@ObjectType()
export class IResponse {
    @Field(() => ResponseStatus)
    status!: ResponseStatus

    @Field(() => AnyScalar)
    data!: ResponseType
}