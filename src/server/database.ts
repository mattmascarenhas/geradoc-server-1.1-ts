import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.MYSQLDATABASE as string;
const dbUser = process.env.MYSQLUSER as string;
const dbPassword = process.env.MYSQLPASSWORD as string;
const dbHost = process.env.MYSQLHOST as string;

const database = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "mysql",
  ssl: true,
  dialectOptions: {
    ssl: { rejectUnauthorized: true },
  },
});

database
  .authenticate()
  .then(() => {
    console.log("🚀 Conexão com banco de dados realizada com sucesso! 🚀");
  })
  .catch((err) => {
    console.log("⚠️ Conexão com banco de dados não realizada! ⚠️");
    console.log(err);
  });

export default database;
