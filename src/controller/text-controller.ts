import { Request, Response } from "express";
import Texts from "../model/text-model";

async function listAllTexts(req: Request, res: Response): Promise<Response> {
  try {
    const texts = await Texts.findAll();

    return res.status(201).json(texts);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao listar os textos!", error });
  }
}

async function createText(req: Request, res: Response): Promise<Response> {
  try {
    const body = req.body;
    const text = await Texts.create(body);

    return res.status(201).json(text);
  } catch (error) {
    return res.status(500).send({ message: "Erro ao criar o texto!", error });
  }
}

async function deleteText(req: Request, res: Response): Promise<Response> {
  try {
    const idText = req.params.id;
    const text = (await Texts.findByPk(idText)) as any;

    await text.destroy();

    return res.json("Client Deleted!");
  } catch (error) {
    return res.status(500).send({ message: "Erro ao deletar o texto!", error });
  }
}

async function updateText(req: Request, res: Response): Promise<Response> {
  try {
    const idText = req.params.id;
    const body = req.body;
    const text = (await Texts.findByPk(idText)) as any;

    await text.update(body);

    return res.json(text);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Erro ao atualizar o texto!", error });
  }
}

export default {
  listAllTexts,
  createText,
  deleteText,
  updateText,
};
