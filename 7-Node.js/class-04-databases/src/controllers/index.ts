import {Request, Response} from "express"

export const userControllers = {
    create(req: Request, res: Response) {
        res.send({message: "created!"})
    },

    read(req: Request, res: Response) {
        res.send({message: "readed!"})
    },

    update(req: Request, res: Response) {
        res.send({message: "updated!"})
    },

    delete(req: Request, res: Response) {
        res.send({message: "deleteed!"})
    }
}