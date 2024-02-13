import { config as envConfig } from "dotenv"

envConfig({
    path: "config.env"
})


const $DB_URL = process.env.DB_URL || ""

if (!$DB_URL) {
    console.error("DB_URL not found in env. Please add it")
}

export const DB_URL = $DB_URL
export const PORT = +(process.env.PORT || 6969)
export const JWT_SECRET = process.env.JWT_SECRET || ""
export const JWT_SESSION_TIMEOUT = process.env.JWT_SESSION_TIMEOUT || "1 mon"
export const NODE_ENV = process.env.NODE_ENV || "development"
export const SERVER_PATH = "http://localhost:"+PORT