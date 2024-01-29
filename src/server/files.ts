import express, { Request, Response } from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder based on user or default
    const folder = req.user && req.user.club ? req.user.club.name : "unclub";
    const uploadPath = path.join(__dirname, `uploads/${folder}`);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Add a unique timestamp to the file name
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

// File upload endpoint
router.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  res.json({ message: "File uploaded successfully" });
});

// File serving endpoint
router.get("/:fileName", (req: Request, res: Response) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, `uploads/${fileName}`);
  res.sendFile(filePath);
});

export default router;
