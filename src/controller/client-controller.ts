import { Response, Request } from "express";
import Clients from "../model/client-model";

async function listAllClients(req: Request, res: Response) {
  try {
    const clients = await Clients.findAll();

    res.status(201).json(clients);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar os clientes!", error });
  }
}

async function listOneClient(req: Request, res: Response) {
  try {
    const idClient = req.params.id;
    const client = await Clients.findByPk(idClient);

    res.status(201).json(client);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar o cliente!", error });
  }
}

async function createClient(req: Request, res: Response) {
  try {
    const body = req.body;
    const client = await Clients.create(body);

    res.status(201).json(client);
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar o cliente!", error });
  }
}

async function deleteClient(req: Request, res: Response) {
  try {
    const idClient = req.params.id;
    const client = (await Clients.findByPk(idClient)) as any;

    if (client !== null || client !== undefined) {
      await client.destroy();
    } else {
      res.json("Value null or undefined!");
    }

    res.json("Client Deleted!");
  } catch (error) {
    res.status(500).send({ message: "Erro ao deletar o cliente!", error });
  }
}

async function updateClient(req: Request, res: Response) {
  try {
    const idClient = req.params.id;
    const body = req.body;
    const client = (await Clients.findByPk(idClient)) as any;

    if (client !== null || client !== undefined) {
      await client.update(body);
    } else {
      res.json("Value null or undefined!");
    }

    res.json(client);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o cliente!", error });
  }
}

export default {
  listAllClients,
  listOneClient,
  createClient,
  deleteClient,
  updateClient,
};
