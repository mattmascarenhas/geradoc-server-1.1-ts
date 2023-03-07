import { DataType } from "sequelize-typescript";
import database from "../server/database";

const Users = database.define("usuarios", {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataType.STRING(70),
    allowNull: false,
  },
  cpf: {
    type: DataType.STRING(18),
    allowNull: false,
  },
  telefone: {
    type: DataType.STRING(15),
    defaultValue: " ",
  },
  email: {
    type: DataType.STRING(50),
    defaultValue: " ",
  },
  senha: {
    type: DataType.STRING(18),
    allowNull: false,
  },
});

export default Users;
