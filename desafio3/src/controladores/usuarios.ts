import { Request, Response } from "express";
import TUsuario from "../tipos/Usuario";
import bancoDeDados from "../bancoDeDados";

const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const fraseSecreta = require('../fraseSecreta');
const usuarios = bancoDeDados.usuarios

const app = express();
app.use(express.json());

export async function cadastrarUsuario(req: Request, res: Response) {
    try {
        const { nome, email, senha } = req.body;
        
        console.log(req.body);

        if (!nome || !email || !senha) {
            return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
        }

        console.log('Todos os campos estão presentes');
        
        const usuarioExistente = usuarios.find((user: TUsuario) => user.email === email);
        
        console.log(usuarioExistente);

        if (usuarioExistente) {
            return res.status(400).json({ mensagem: "E-mail já cadastrado" });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const novoUsuario: TUsuario = {
            id: uuidv4(),
            nome,
            email,
            senha: senhaCriptografada
        };
        
        console.log(novoUsuario);

        usuarios.push(novoUsuario);

        return res.status(201).json({ id: novoUsuario.id, nome, email });
    } catch (error) {
        return res.status(400).json({ mensagem: "Erro interno do servidor" });
    }
}

export async function loginUsuario(req: Request, res: Response) {
    try {
        const { email, senha } = req.body;
        console.log({ email, senha });

        if (!email || !senha) {
            return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
        }

        const usuario = usuarios.find((user: TUsuario) => user.email === email);
        if (!usuario) {
            return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) {
            return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
        }

        const comprovante = fraseSecreta + usuario.id
        return res.status(200).json(comprovante);
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

export default {
    cadastrarUsuario,
    loginUsuario
};
