import { DataType } from "sequelize-typescript";
import database from "../server/database";

const Clients = database.define("clientes", {
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
  rg: {
    type: DataType.STRING(16),
    defaultValue: " ",
  },
  nacionalidade: {
    type: DataType.STRING(25),
    allowNull: false,
  },
  estado_civil: {
    type: DataType.STRING(16),
    allowNull: false,
  },
  orgao_emissor: {
    type: DataType.STRING(12),
    defaultValue: " ",
  },
  endereco: {
    type: DataType.STRING(60),
    defaultValue: " ",
  },
  cidade: {
    type: DataType.STRING(20),
    allowNull: false,
  },
  estado: {
    type: DataType.STRING(20),
    allowNull: false,
  },
  cep: {
    type: DataType.STRING(9),
    defaultValue: " ",
  },
  numero: {
    type: DataType.STRING(10),
    defaultValue: " ",
  },
  telefone: {
    type: DataType.STRING(15),
    defaultValue: " ",
  },
  email: {
    type: DataType.STRING(50),
    defaultValue: " ",
  },
  profissao: {
    type: DataType.STRING(30),
    defaultValue: " ",
  },
});

export default Clients;
