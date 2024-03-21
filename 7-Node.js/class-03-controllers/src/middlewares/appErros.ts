import {Request, Response, NextFunction} from "express"

type AppError = {
    status:number
    message: string
}
export function appErros(error:AppError, req: Request, res: Response, next: NextFunction) {
    console.error("Middleware Erros",error);
    res.status(error.status || 500)
    res.json({message: error.message || "Server error!"})
    
}