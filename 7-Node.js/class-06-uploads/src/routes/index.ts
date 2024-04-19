import { Router } from "express";
import multer from "multer";
import { fileControllers } from "../controllers/fileControllers";
import { MULTER } from "../configs/uploadsConfigs";
// import { appErros } from "../middlewares/app.Errors";

export const router = Router();
export const upload = multer(MULTER);

router.post("/files", upload.single("file"), fileControllers.upload);
router.delete("/files/:name", fileControllers.delete);
