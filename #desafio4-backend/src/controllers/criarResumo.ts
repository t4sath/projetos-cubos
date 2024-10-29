import { Request, Response } from 'express';
import { pool } from "../conexaoBd"

export async function criarResumo(req: Request, res: Response) {
  const { materiaId, titulo, topicos }: { materiaId: number; titulo?: string; topicos: string[] } = req.body;

  if (!materiaId || !topicos || topicos.length === 0) {
    return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
  }

  try {
    const materia = await pool.query('SELECT * FROM materias WHERE id = $1', [materiaId]);
    if (materia.rowCount === 0) {
      return res.status(404).json({ mensagem: "Matéria não encontrada" });
    }

    const novoTitulo = titulo || 'Sem titulo'

    const topicosString = topicos.join(',');
    const descricao = "Descrição gerada...";

    const novoResumo = await pool.query(
      'INSERT INTO resumos (usuario_id, materia_id, titulo, topicos, descricao) VALUES ($1, $2, $3, $4, $5) RETURNING id, usuario_id AS "usuarioId", materia_id AS "materiaId", titulo, topicos, descricao',
      [req.userId, materiaId, titulo, topicosString, descricao]
    );

    const resumo = {
      ...novoResumo.rows[0], 
      topicos: novoResumo.rows[0].split(",")
    }

    return res.status(201).json(resumo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

