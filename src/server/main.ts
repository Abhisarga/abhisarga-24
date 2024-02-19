import { resolvers } from "@resolvers"
import { EventModes } from "@types_/club/event"
import { ImagePosition } from "@types_/club/theme"
import Context from "@types_/context"
import { ResponseStatus } from "@types_/response"
import { SponsorTypes } from "@types_/sponsor"
import { UserTypes } from "@types_/user"
import { PersonTypes } from "@types_/user/person"
import { ApolloServer } from "apollo-server-express"
import compression from "compression"
import cors from "cors"
import type { Express } from "express"
import express from "express"
import mongoose from "mongoose"
import { dirname, join as joinPath } from "node:path"
import { fileURLToPath } from "node:url"
import { buildSchema, registerEnumType } from "type-graphql"
import { DB_URL, PORT } from "./config"
import filesRouter from "./files"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app: Express = express()

app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/files", filesRouter);

app.use("/static/files", express.static(joinPath(__dirname, "..", "..", "public")))

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
        registerEnumType(ImagePosition, {
            name: "ImagePosition"
        })
        console.log("Registered enum types")
        const server = new ApolloServer({
            schema: await buildSchema({
                resolvers,
            }),
            context: ({ req, res }: Context) => ({ req, res }),

        })
        await server.start()
        server.applyMiddleware({ app })
        app.listen(PORT, () => {
            console.log("App listening on port:", PORT)
        })
    })
    .catch(console.log)