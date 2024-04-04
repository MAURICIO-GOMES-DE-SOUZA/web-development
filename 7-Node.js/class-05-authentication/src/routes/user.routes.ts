import { Router } from "express";
import { userControllers } from "../controllers/userController";

export const userRoutes = Router()

userRoutes.post("/user", userControllers.create)
userRoutes.get("/user", userControllers.read)