import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from "../conexaoBd"

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
  }

  try {
    const userResult = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (userResult.rowCount === 0) {
      return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
    }

    const user = userResult.rows[0];
    const validPassword = await bcrypt.compare(senha, user.senha);

    if (!validPassword) {
      return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};
