import { SERVER_PATH } from "@server/config";
import { mkdir, readdir as readDir, writeFile } from "node:fs/promises";
import { dirname, join as joinPath } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const downloadFile = async (filename: string, root: string, content: Buffer): Promise<string|null> => {
    const baseDir = joinPath(__dirname, "..", "..", "public")
    if(root.length) {
        if(!(await readDir(baseDir)).includes(root)) {
            await mkdir(joinPath(__dirname, "..", "..", "public", root))
        }
    }
    try {
        await writeFile(joinPath(baseDir, root, filename), content)
        return SERVER_PATH+joinPath(baseDir, root, filename).replace(baseDir, "/static/files").replace(/\\/g, "/")
    }
    catch(e) {
        console.warn(e)
        return null
    }
}