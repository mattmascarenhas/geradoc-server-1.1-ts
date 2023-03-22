import { Response, Request } from "express";
import ClientBlock from "../model/client-block-model";

async function listAllClientsWithBlocks(req: Request, res: Response) {
  try {
    const clientsBlocks = await ClientBlock.findAll();

    res.status(201).json(clientsBlocks);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro ao listar os clientes e blocos!", error });
  }
}

async function associateClientWithBlock(req: Request, res: Response) {
  try {
    const body = req.body;
    const clientWithBlock = await ClientBlock.create(body);

    res.status(201).json(clientWithBlock);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro ao associar cliente e bloco!", error });
  }
}

async function deleteClientBlock(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const clientBlockDelete = (await ClientBlock.findByPk(id)) as any;

    await clientBlockDelete.destroy();

    res.json("Association Deleted!");
  } catch (error) {
    res
      .status(500)
      .send({ message: "Erro ao deletar cliente e bloco!", error });
  }
}

export default {
  listAllClientsWithBlocks,
  associateClientWithBlock,
  deleteClientBlock,
};
