import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Deu ruim", erro);
});

conexao.once("open", ()=>{
console.log("Conectou!");
});

const app = express();
routes(app);

export default app;

