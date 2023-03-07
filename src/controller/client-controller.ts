import { Response, Request } from "express";

import Clients from "../model/client-model";

async function listAllClients(req: Request, res: Response): Promise<Response> {
  try {
    const clients = await Clients.findAll();

    return res.status(201).json(clients);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao listar os clientes!", error });
  }
}

async function listOneClient(req: Request, res: Response): Promise<Response> {
  try {
    const idClient = req.params.id;
    const client = await Clients.findByPk(idClient);

    return res.status(201).json(client);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao listar o cliente!", error });
  }
}

async function createClient(req: Request, res: Response): Promise<Response> {
  try {
    const body = req.body;
    const client = await Clients.create(body);

    return res.status(201).json(client);
  } catch (error) {
    return res.status(500).send({ message: "Erro ao criar o cliente!", error });
  }
}

async function deleteClient(req: Request, res: Response): Promise<Response> {
  try {
    const idClient = req.params.id;
    const client = (await Clients.findByPk(idClient)) as any;

    if (client !== null || client !== undefined) {
      await client.destroy();
    } else {
      res.json("Value null or undefined!");
    }

    return res.json("Client Deleted!");
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao deletar o cliente!", error });
  }
}

async function updateClient(req: Request, res: Response): Promise<Response> {
  try {
    const idClient = req.params.id;
    const body = req.body;
    const client = (await Clients.findByPk(idClient)) as any;

    if (client !== null || client !== undefined) {
      await client.update(body);
    } else {
      res.json("Value null or undefined!");
    }

    return res.json(client);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao atualizar o cliente!", error });
  }
}

export default {
  listAllClients,
  listOneClient,
  createClient,
  deleteClient,
  updateClient,
};
