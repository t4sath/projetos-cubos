import express, { Request, Response } from 'express';
import bancoDeDados from '../bancoDeDados';

const app = express();
app.use(express.json());

app.get('/eventos', listarEventos);

export function listarEventos(req: Request, res: Response) {
    const eventos = bancoDeDados.eventos;
    if (!eventos || eventos.length === 0) {
        return res.status(404).json({ mensagem: "Nenhum evento encontrado" });
    }

    const { maxPreco } = req.query;
    if (maxPreco) {
        const precoMax = parseInt(maxPreco as string, 10);
        if (isNaN(precoMax) || precoMax < 0) {
            return res.status(400).json({ mensagem: "O preço máximo do evento deve conter apenas números e deve ser positivo" });
        }
        const eventosFiltrados = eventos.filter(evento => evento.preco <= precoMax);
        return res.status(200).json(eventosFiltrados);
    }

    return res.status(200).json(eventos);
}

export default { listarEventos };
