import { Request, Response } from 'express';
import bancoDeDados from "../bancoDeDados";
import { v4 as uuidv4 } from 'uuid';
import TCompra from '../tipos/Compra';

const eventos = bancoDeDados.eventos;
const usuarios = bancoDeDados.usuarios;
const compras = bancoDeDados.compras;

export function validarComprovante(req: Request, res: Response) {
    console.log('Recebendo requisição para validar comprovante');

    const { idEvento, id_usuario } = req.body;

    console.log(req.body);

    if (!idEvento || !id_usuario) {
        return res.status(400).json({ mensagem: "O identificador do evento e o ID do usuário são obrigatórios" });
    }

    const evento = eventos.find(evento => evento.id === idEvento);
    if (!evento) {
        return res.status(404).json({ mensagem: "Evento não encontrado" });
    }

    const usuario = usuarios.find(usuario => usuario.id === id_usuario);
    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    const novaCompra: TCompra = {
        id: uuidv4(),
        id_usuario,
        id_evento: idEvento,
    };

    compras.push(novaCompra);
    res.status(201).json(novaCompra);
}

export function autenticacaoComprovante(req: Request, res: Response) {
    const { id_usuario } = req.body;

    if (!id_usuario) {
        return res.status(400).json({ mensagem: "O ID do usuário é obrigatório" });
    }

    const comprasUsuario = compras.filter(compra => compra.id_usuario === id_usuario);
    res.status(200).json(comprasUsuario);
}

export function cancelarComprovante(req: Request, res: Response) {

    const { id } = req.params;
    const { id_usuario } = req.body;

    if (!id_usuario) {
        return res.status(400).json({ mensagem: "O ID do usuário é obrigatório" });
    }

    const compra = compras.find((compra: TCompra) => compra.id === id && compra.id_usuario === id_usuario);

    if (!compra) {
        return res.status(404).json({ mensagem: "Compra não encontrada" });
    }

    bancoDeDados.compras = compras.filter((compra: TCompra) => compra.id !== id);
    res.status(204).send();
}

export default { 
    validarComprovante, 
    autenticacaoComprovante, 
    cancelarComprovante
};