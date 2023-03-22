import { Request, Response } from "express";
import Blocks from "../model/block-model";

async function listAllBlocks(req: Request, res: Response) {
  try {
    const blocks = await Blocks.findAll();
    res.status(201).json(blocks);
  } catch (error) {
    res.status(500).send({ message: "Erro ao os blocos!", error });
  }
}

async function createBlock(req: Request, res: Response) {
  try {
    const body = req.body;
    const block = await Blocks.create(body);

    res.status(201).json(block);
  } catch (error) {
    res.status(500).send({ message: "Erro ao criar um bloco!", error });
  }
}

async function deleteBlock(req: Request, res: Response) {
  try {
    const idBlock = req.params.id;
    const block = (await Blocks.findByPk(idBlock)) as any;

    if (block !== null || block !== undefined) {
      await block.destroy();
    } else {
      res.json("Value null or undefined!");
    }

    res.json("Block Deleted!");
  } catch (error) {
    res.status(500).send({ message: "Erro ao deletar o bloco!", error });
  }
}

async function updateBlock(req: Request, res: Response) {
  const idBlock = req.params.id;
  const body = req.body;
  const block = (await Blocks.findByPk(idBlock)) as any;

  if (block !== null || block !== undefined) {
    await block.update(body);
  } else {
    res.json("Value null or undefined!");
  }

  try {
    res.json(block);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar o bloco!", error });
  }
}
export default {
  listAllBlocks,
  createBlock,
  deleteBlock,
  updateBlock,
};
