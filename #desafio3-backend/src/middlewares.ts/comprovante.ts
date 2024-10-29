import { Request, Response, NextFunction } from "express";
import bancoDeDados from "../bancoDeDados";
const fraseSecreta = require('../fraseSecreta')

interface AuthenticatedRequest extends Request {
    idUsuario?: string;
}

export function validarComprovanteMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const comprovante = req.query.comprovante as string;

    if (!comprovante) {
        return res.status(401).json({ mensagem: "Token de autenticação não fornecido." });
    }

    const [fraseSecreta, idUsuario] = comprovante.split('/');

    if (!fraseSecreta || !idUsuario || fraseSecreta !== fraseSecreta) {
        return res.status(401).json({ mensagem: "Falha na autenticação." });
    }

    const usuario = bancoDeDados.usuarios.find(usuario => usuario.id === idUsuario);

    if (!usuario) {
        return res.status(401).json({ mensagem: "Falha na autenticação." });
    }

    req.idUsuario = idUsuario;
    next();
}
