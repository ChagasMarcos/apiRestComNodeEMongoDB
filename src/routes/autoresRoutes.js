import express from "express";
import autoresController from "../controllers/autoresController.js";


const routes = express.Router();

routes.get("/autores", autoresController.listarAutores);
routes.get("/autores/:id", autoresController.selecionarAutorPorId);
routes.post("/autores", autoresController.cadastrarAutor);
routes.put("/autores/:id", autoresController.atualizarAutor);
routes.delete("/autores/:id", autoresController.excluirAutor);

export default routes;