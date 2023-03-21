import { Response, Request } from "express";
import BlockText from "../model/block-text-model";

async function listAllBlockTexts(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const blockTexts = await BlockText.findAll();

    return res.status(201).json(blockTexts);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao salvar blocos de texto", error });
  }
}

async function associateBlockWithText(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const body = req.body;
    await BlockText.bulkCreate(body);

    return res.send({ message: "Blocos de texto salvos com sucesso", body });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao salvar blocos de texto", error });
  }
}

async function deleteBlockText(req: Request, res: Response): Promise<Response> {
  try {
    const id = req.params.id;
    const blockText = (await BlockText.findByPk(id)) as any;

    await blockText.destroy();

    return res.json("Association Deleted!");
  } catch (error) {
    return res.status(500).send({ message: "Esse bloco não existe", error });
  }
}

export default {
  listAllBlockTexts,
  associateBlockWithText,
  deleteBlockText,
};
