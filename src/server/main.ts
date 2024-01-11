import { ApolloServer } from "apollo-server-express"
import compression from "compression"
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import { buildSchema } from "type-graphql"
import { DB_URL, PORT } from "./config"
import { resolvers } from "@resolvers"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import type { Express } from "express"

const app: Express = express()

app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(DB_URL)
.then(async () => {
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers,
        }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    })
    await server.start()
    server.applyMiddleware({ app })
    console.log("Connected to the database")
    app.listen(PORT, () => {
        console.log("App listening on port:", PORT)
    })
})
.catch(console.log)