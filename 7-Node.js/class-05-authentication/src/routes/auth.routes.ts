import { Router } from "express";
import { authControllers } from "../controllers/authController";

export const autheRoutes = Router();

autheRoutes.post("/login", authControllers.login);
