import { Request, Response, NextFunction } from "express";
import { z } from "zod";

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

      console.log(name, email, password);

      return res.status(201).json({ message: "User created!" });
    } catch (error) {
      return next(error);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },
};
