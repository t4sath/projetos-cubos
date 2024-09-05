import { Request, Response } from "express";
import express from 'express'
const app = express();
app.use(express.json());

export function inicializar(req: Request, res: Response) {
    res.status(200).send({ mensagem: "API de vendas de ingressos" });
}

export default {
    inicializar
}

