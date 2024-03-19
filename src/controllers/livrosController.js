import livro from "../models/Livro.js";
import { autor }from "../models/Autor.js";

class LivrosController {

    static async listarLivros(req, res) {
        try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        } catch (erro) {
        res.status(500).json({ message: `${erro.message} - Falhou!` });
         }
    };

    static async cadastrarLivro(req, res) {

        const novoLivro = req.body;   //guarda a requisição
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor); //localiza o autor
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc}}; //monta o livro a ser criado
            await livro.create(livroCompleto); //salva novo livro
            res.status(201).json({
                message: "Criou!",
                livro: livroCompleto });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    }

    static async selecionarLivroPorId(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById({id});
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    };


    static async atualizarLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    };

    static async excluirLivro(req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluido!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    };

    static async listarLivrosPorEditora(req , res){
        const editora = req.query.editora;

        try {
            const livrosPorEditora = await livro.find({editora});
            res.status(200).json(livrosPorEditora);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Falhou!` });
        }
    }
};

export default LivrosController;