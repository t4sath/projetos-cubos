import { Request, Response } from 'express';
import { pool } from "../conexaoBd"

export async function listarMaterias(req: Request, res: Response) {
  try {
    const materias = await pool.query('SELECT * FROM materias');
    return res.status(200).json(materias.rows);
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

