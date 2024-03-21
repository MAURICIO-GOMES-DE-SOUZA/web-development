import { Request, Response, NextFunction } from "express";

export const userControllers = {
  async create(req: Request, res: Response, Next: NextFunction) {
    try {
      const { id, name, age } = req.body;

      if (id && name && age) {
        // console.log(A);

        return res.status(201).json({ status: `user ${id} created!` });
      }

      throw res.status(400).json({ status: `user not created!` });
    } catch (error) {
     Next(error)
    }
  },




  read(req: Request, res: Response, netx: NextFunction) {
    const { id } = req.params;
    res.status(200).json({ user: id });
  },

  async update(req: Request, res: Response, Next: NextFunction) {
   try {
    const { id } = req.params;
    const { name, age } = req.body;

    if (id && name && age) {
      console.log("updated", { id, name, age });
      res.status(200).json({ status: `user ${id} updated!` });
      return;
    }

    throw res.status(400).json({ status: "user not updated!" });
    
   } catch (error) {
    Next(error)
   }
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ status: `user ${id} deleted!` });
  },
};
