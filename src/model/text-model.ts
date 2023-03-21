import { DataType } from "sequelize-typescript";
import database from "../server/database";

const Texts = database.define("textos", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataType.STRING,
    defaultValue: "Sem título",
  },
  texto: {
    type: DataType.TEXT,
    allowNull: false,
  },
});

export default Texts;
