import { DataType } from "sequelize-typescript";
import database from "../server/database";
import Blocks from "./block-model";
import Texts from "./text-model";

const BlockText = database.define("blocos_textos", {
  bloco_id: {
    type: DataType.INTEGER,
    primaryKey: true,
  },
  texto_id: {
    type: DataType.INTEGER,
    primaryKey: true,
  },
});

BlockText.belongsTo(Blocks, { foreignKey: "bloco_id" });
BlockText.belongsTo(Texts, { foreignKey: "texto_id" });

BlockText.sync({ force: false });

export default BlockText;
