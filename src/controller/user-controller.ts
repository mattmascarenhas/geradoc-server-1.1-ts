import { Request, Response } from "express";
import Users from "../model/user-model";

async function listAllUsers(req: Request, res: Response): Promise<Response> {
  try {
    const users = await Users.findAll();

    return res.status(201).json(users);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao listar os usuários!", error });
  }
}

async function listOneUser(req: Request, res: Response): Promise<Response> {
  try {
    const idUser = req.params.id;
    const user = await Users.findByPk(idUser);

    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao listar o usuário!", error });
  }
}

async function authenticate(req: Request, res: Response): Promise<Response> {
  try {
    const { email, senha } = req.body;
    const user = await Users.findOne({
      where: {
        email: email,
        senha: senha,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    return res.json(user);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao tentar autenticação!", error });
  }
}

export default {
  listAllUsers,
  listOneUser,
  authenticate,
};
