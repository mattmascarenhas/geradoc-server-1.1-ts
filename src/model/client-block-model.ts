import { DataType } from "sequelize-typescript";
import database from "../server/database";
import Blocks from "./block-model";
import Clients from "./client-model";

const ClientBlock = database.define("clientes_blocos", {
  cliente_id: {
    type: DataType.INTEGER,
  },
  bloco_id: {
    type: DataType.INTEGER,
    primaryKey: true,
  },
});

ClientBlock.belongsTo(Clients, { foreignKey: "cliente_id" });
ClientBlock.belongsTo(Blocks, { foreignKey: "bloco_id" });

ClientBlock.sync({ force: false });

export default ClientBlock;
