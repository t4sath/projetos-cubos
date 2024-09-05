import { Request, Response } from "express";
import bancoDeDados from "../bancoDeDados";
import { v4 as uuidv4 } from 'uuid';
import TCompra from '../tipos/Compra';

interface AuthenticatedRequest extends Request {
    idUsuario?: string;
}

export function realizarCompra(req: AuthenticatedRequest, res: Response) {
    const { idEvento } = req.body;
    
    if (!idEvento) {
        return res.status(400).json({ mensagem: "O identificador do evento é obrigatório" });
    }
    
    const evento = bancoDeDados.eventos.find(evento => evento.id === idEvento);
    if (!evento) {
        return res.status(404).json({ mensagem: "Evento não encontrado" });
    }

    const { idUsuario } = req;
    if (!idUsuario) {
        return res.status(401).json({ mensagem: "Falha na autenticação" });
    }

    const novaCompra: TCompra = {
        id: uuidv4(),
        id_usuario: idUsuario,
        id_evento: idEvento,
    };

    bancoDeDados.compras.push(novaCompra);
    return res.status(201).json(novaCompra);
}

export function listarCompras(req: AuthenticatedRequest, res: Response) {
    const { idUsuario } = req;

    if (!idUsuario) {
        return res.status(401).json({ mensagem: "Falha na autenticação" });
    }

    const compras = bancoDeDados.compras.filter(compra => compra.id_usuario === idUsuario);
    return res.status(200).json(compras);
}

export function cancelarCompra(req: AuthenticatedRequest, res: Response) {
    const { id } = req.params;
    const { idUsuario } = req;

    if (!idUsuario) {
        return res.status(401).json({ mensagem: "Falha na autenticação" });
    }

    const compra = bancoDeDados.compras.find(compra => compra.id === id && compra.id_usuario === idUsuario);
    if (!compra) {
        return res.status(404).json({ mensagem: "Compra não encontrada" });
    }

    bancoDeDados.compras = bancoDeDados.compras.filter(compra => compra.id !== id);
    return res.status(204).send();
}

export default { 
    realizarCompra,
    listarCompras, 
    cancelarCompra 
};