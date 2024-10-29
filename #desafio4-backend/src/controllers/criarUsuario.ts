import { Request, Response } from 'express';
import { pool } from "../conexaoBd"
import bcrypt from 'bcrypt'

export async function criarUsuario(req: Request, res: Response) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
  }

  try {
    const userExists = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(409).json({ mensagem: "E-mail já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);
    const newUser = await pool.query(
      'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email',
      [nome, email, hashedPassword]
    );

    return res.status(201).json(newUser.rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}