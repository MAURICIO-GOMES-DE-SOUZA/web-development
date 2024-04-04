import { Router } from "express";
import { autheRoutes } from "./auth.routes";
import { userRoutes } from "./user.routes";

export const routes = Router()

routes.use(autheRoutes)
routes.use(userRoutes)