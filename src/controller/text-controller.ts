import { Request, Response } from "express";
import Texts from "../model/text-model";

async function listAllTexts(req: Request, res: Response) {
  try {
    const texts = await Texts.findAll();

    res.status(201).json(texts);
  } catch (error) {
    res.status(500).send({ message: "Erro ao listar os textos!", error });
  }
}

async function createText(req: Request, res: Response) {
  try {
    const body = req.body;
    const text = await Texts.create(body);

    res.status(201).json(text);
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar o texto!", error });
  }
}

async function deleteText(req: Request, res: Response) {
  try {
    const idText = req.params.id;
    const text = (await Texts.findByPk(idText)) as any;

    await text.destroy();

    res.json("Client Deleted!");
  } catch (error) {
    res.status(500).send({ message: "Erro ao deletar o texto!", error });
  }
}

async function updateText(req: Request, res: Response) {
  try {
    const idText = req.params.id;
    const body = req.body;
    const text = (await Texts.findByPk(idText)) as any;

    await text.update(body);

    res.json(text);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o texto!", error });
  }
}

export default {
  listAllTexts,
  createText,
  deleteText,
  updateText,
};
