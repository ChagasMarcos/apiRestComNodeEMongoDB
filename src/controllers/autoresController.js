import { autor } from "../models/Autor.js";

class AutoresController {

    static async listarAutores(req, res) {
        try {
        const listaAutores = await autor.find({});
        res.status(200).json(listaAutores);
        } catch (erro) {
        res.status(500).json({ message: `${erro.message} - Falhou!` });
         }
    };

    static async cadastrarAutor(req, res) {

        try {
         const novoAutor = await autor.create(req.body);   
            res.status(201).json({
                message: "Criou!",
                autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    }

    static async selecionarAutorPorId(req, res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById({id});
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    };


    static async atualizarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    };

    static async excluirAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor excluido!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    };
};

export default AutoresController;