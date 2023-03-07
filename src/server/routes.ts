import express from "express";
import UserController from "../controller/user-controller";
import ClienteController from "../controller/client-controller";
import BlockController from "../controller/block-controller";
const routes = express.Router();

/*=====================CLIENT======================= */
routes.get("/clients", ClienteController.listAllClients);
routes.get("/clients/:id", ClienteController.listOneClient);
routes.post("/clients", ClienteController.createClient);
routes.delete("/clients/:id", ClienteController.deleteClient);
routes.put("/clients/:id", ClienteController.updateClient);
/*=====================BLOCK======================= */
routes.get("/blocks", BlockController.listAllBlocks);
routes.post("/blocks", BlockController.createBlock);
routes.delete("/blocks/:id", BlockController.deleteBlock);
routes.put("/blocks/:id", BlockController.updateBlock);
/*=================Usuários==================== */
routes.get("/users", UserController.listAllUsers);
routes.get("/users/:id", UserController.listOneUser);
routes.post("/users/", UserController.authenticate);

export default routes;
