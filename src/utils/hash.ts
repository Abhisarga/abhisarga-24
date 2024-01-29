import { createHash, timingSafeEqual } from "node:crypto";

export default class Hash {
    static create = (input: string) => createHash("sha256").update(input).digest("base64")

    static compare = (hash: string, password: string) => timingSafeEqual(Buffer.from(hash), Buffer.from(this.create(password)))

    static simpleCompare = (val1: string, val2: string) => timingSafeEqual(Buffer.from(val1), Buffer.from(val2)) 
}