import react from '@vitejs/plugin-react-swc'
import { readdir as readDir } from 'node:fs/promises'
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from 'vite'
import restart from 'vite-plugin-restart'


// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => {
    if (command === "serve") {
        const alias = {}
        alias["@"] = {
            find: "@",
            replacement: fileURLToPath(new URL("./src", import.meta.url))
        }
        const data = (await readDir("./src", { withFileTypes: true }))
        for (const dir of data) {
            const name = (dir.isDirectory()) ? dir.name : dir.name.split(".").slice(0, -1).join(".")
            alias[`@${name}`] = {
                find: `@${name}`,
                replacement: fileURLToPath(new URL(`./src/${dir.name}`, import.meta.url))
            }
        }
        return {
            plugins: [react(), restart({ restart: "src" })],
            resolve: {
                alias
            },
            assetsInclude: [
                `**/*.glb`
            ]
        }
    }
    return {
        plugins: [react()],
        assetsInclude: [`**/*.glb`]
    }
})

