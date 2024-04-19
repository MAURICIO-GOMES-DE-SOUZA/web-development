import { Request, Response, NextFunction } from "express";
import path from "path"
import fs from "fs"
import { UPLOADS_FOLDER } from "../configs/uploadsConfigs";

export const fileControllers = {
  async upload(req: Request, res: Response, next: NextFunction) {
    try {
     if (req.file){
      const {filename, size, originalname} = req.file;
      
      const myFile = {
        name: originalname,
        key: filename,
        size: Number(size / 1024).toFixed(1) + "KB",
        url: `${process.env.SERVER_BASE_URL}/file/${filename}`,
        created_at: new Date(),
      }
      
      return res.status(200).json(myFile);
     }
    } catch (error) {
      next(error);
    }
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ user: id });
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, age } = req.body;

      if (id && name && age) {
        console.log("updated", { id, name, age });
        return res.status(200).json({ status: `user ${id} updated!` });
      }

      throw res.status(400).json({ status: "user not updated!" });
    } catch (error) {
      next(error);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.params
      const filePath = path.resolve(UPLOADS_FOLDER, name)

      await fs.promises.stat(filePath)
      await fs.promises.unlink(filePath);

      return res.status(200).json({ message: `file deleted!` });
    } catch (error) {
      return next(error)
    }
  },  
};
