import { Response, Request } from "express";
import ClientBlock from "../model/client-block-model";

async function listAllClientsWithBlocks(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const clientsBlocks = await ClientBlock.findAll();

    return res.status(201).json(clientsBlocks);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao listar os clientes e blocos!", error });
  }
}

async function associateClientWithBlock(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const body = req.body;
    const clientWithBlock = await ClientBlock.create(body);

    return res.status(201).json(clientWithBlock);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao associar cliente e bloco!", error });
  }
}

async function deleteClientBlock(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const id = req.params.id;
    const clientBlockDelete = (await ClientBlock.findByPk(id)) as any;

    await clientBlockDelete.destroy();

    return res.json("Association Deleted!");
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao deletar cliente e bloco!", error });
  }
}

export default {
  listAllClientsWithBlocks,
  associateClientWithBlock,
  deleteClientBlock,
};
