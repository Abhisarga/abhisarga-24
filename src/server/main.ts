import { resolvers } from "@resolvers"
import { EventModes } from "@types_/club/event"
import { ResponseStatus } from "@types_/response"
import { SponsorTypes } from "@types_/sponsor"
import { UserTypes } from "@types_/user"
import { PersonTypes } from "@types_/user/person"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { ApolloServer } from "apollo-server-express"
import compression from "compression"
import cors from "cors"
import type { Express } from "express"
import express from "express"
import mongoose from "mongoose"
import { buildSchema, registerEnumType } from "type-graphql"
import { DB_URL, PORT } from "./config"
import Context from "@types_/context"

const app: Express = express()

app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(DB_URL)
    .then(async () => {
        console.log("Connected to the database")
        registerEnumType(UserTypes, {
            name: "UserTypes"
        })
        registerEnumType(PersonTypes, {
            name: "PersonTypes"
        })
        registerEnumType(ResponseStatus, {
            name: "ResponseStatus"
        })
        registerEnumType(EventModes, {
            name: "EventModes"
        })
        registerEnumType(SponsorTypes, {
            name: "SponsorTypes"
        })
        console.log("Registered enum types")
        const server = new ApolloServer({
            schema: await buildSchema({
                resolvers,
            }),
            context: ({ req, res }: Context) => ({ req, res }),
            
        })
        await server.start()
        server.applyMiddleware({ app, path: "/graphiQL" })
        app.listen(PORT, () => {
            console.log("App listening on port:", PORT)
        })
    })
    .catch(console.log)