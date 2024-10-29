import { Request, Response, NextFunction } from "express";

export function validarMaxPreco(req: Request, res: Response, next: NextFunction) {
    const { maxPreco } = req.query;
    if (maxPreco) {
        const preco = Number(maxPreco);
        if (isNaN(preco) || preco < 0) {
            return res.status(400).json({ mensagem: "O preço máximo do evento deve conter apenas números e deve ser positivo" });
        }
    }
    next();
}

export default validarMaxPreco;
