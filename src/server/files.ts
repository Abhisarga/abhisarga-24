import express, { Request, Response } from "express";
import Multer from "multer";
import { verifyToken } from "./middleware/auth";
import ISession from "@types_/user/session";
import ErrorHandler from "@handlers/error";
import Hash from "@utils/hash";
import { downloadFile } from "@utils/file";
const router = express.Router();

const multer = Multer();
const handler = new ErrorHandler("fileUpload")

router.post("/upload", multer.single("file"), verifyToken(), async (req: Request, res: Response) => {
    const { session } = res.locals as {
        session: ISession
    }
    const user = session.user
    const file = req.file as Express.Multer.File
    if (!file) {
        return res.status(422).send(handler.error("Invalid file!"))
    }
    const originalName = file!.originalname.split(".")
    const mimeType = originalName.pop()
    const fileName = Hash.create(user + "--" + originalName.join(".")).replace(/\//g, "--")
    const url = await downloadFile(`${fileName}.${mimeType}`, user._id.toString(), file!.buffer) as string
    if (!url) {
        return res.status(422).send(handler.error("Error downloading file. Please upload the correct file"))
    }
    return res.status(200).send(handler.success(url))
});

export default router;
