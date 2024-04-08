import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { userRepositories } from "../repositories/userRepositories";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          name: z
            .string({
              required_error: "Nome obrigatório!",
              invalid_type_error: "Para o nome use somente texto!",
            })
            .min(3, { message: "Mínimo de 3 caracteres para o nome!" })
            .max(255, "Tamanho máximo atingido para o nome!"),

          email: z
            .string({
              required_error: "Email obrigatório!",
              invalid_type_error: "Somente texto!",
            })
            .email({ message: "Email inválido!" })
            .max(255, "Tamanho máximo atingido para o email!"),

          password: z
            .string({
              required_error: "Senha obrigatória!",
              invalid_type_error: "Para a senha use o tipo string!",
            })
            .min(7, "Senha com mínimo de 7 caracteres")
            .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{7,}$/, {
              message:
                "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.",
            })
            .max(255, "Tamanho máximo atingido para a senha!"),
        })
        .strict();

      const { name, email, password } = userSchema.parse(req.body);

      const userExists = await userRepositories.getByEmail(email);
      if (userExists)
        throw res.status(400).json({
          message: "email already exists!",
        });

      const userCreated = await userRepositories.create({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "user created!", userCreated });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const userID = "572b3226-ffa1-4a43-a4c0-9d841ef4c055";
      const user = await userRepositories.getByID(userID);
      if (!user) throw res.status(404).json({ message: "use not found!" });

      const { name, email } = user;

      return res.status(200).json({ name, email });
    } catch (error) {
      return next(error);
    }
  },
};
