import { Request, Response, NextFunction } from "express";
import { userRepositories } from "../repositories/userRepositories";
import { compare } from "bcrypt";
import { z } from "zod";
import {sign} from "jsonwebtoken"
export const authControllers = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const userSchema = z
        .object({
          email: z
            .string({
              invalid_type_error: "Somente texto!",
            })
            .email({ message: "Email inválido!" })
            .max(255, "Tamanho máximo atingido para o email!"),

          password: z
            .string({
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

      const { email, password } = userSchema.parse(req.body);

      const user = await userRepositories.getByEmail(email);
      if (!user) throw res.status(200).json({ message: "email com formato  ivalid!" });

      const passwordCheck = await compare(password, user.password);
      if (!passwordCheck) {
        throw res.status(401).json({ message: "password invalid!" });
      }

      const token = sign({id:user.id}, process.env.SECRET_TOKEN, {
        expiresIn:process.env.EXPIRESIN_TOKEN
      })

      res.cookie(process.env.KEY_TOKEN, token, {
        httpOnly: true,
        sameSite: "none",
       secure: true,
       maxAge: 1000 * 60 * 15, 
      })


      return res.status(200).json({ message: "User logged in!", });
    } catch (error) {
      return next(error);
    }
  },
};
