import { DataType } from "sequelize-typescript";
import database from "../server/database";

const Blocks = database.define("blocos", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataType.STRING,
    defaultValue: "Sem título",
  },
});

export default Blocks;
