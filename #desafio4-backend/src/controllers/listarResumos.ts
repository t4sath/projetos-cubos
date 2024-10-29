import { Request, Response } from 'express';
import { pool } from "../conexaoBd"

export async function listarResumos(req: Request, res: Response) {
  const { materia } = req.query;

  try {
    let resumos;

    if (materia) {
      resumos = await pool.query(
        `SELECT r.id, r.usuario_id AS "usuarioId", r.materia_id AS "materiaId", r.titulo, r.topicos, r.descricao, r.criado, m.nome AS materia FROM resumos r
         JOIN materias m ON r.materia_id = m.id
         WHERE r.usuario_id = $1 AND m.nome = $2`,
        [req.userId, materia]
      );
    } else {
      resumos = await pool.query(
        `SELECT r.id, r.usuario_id AS "usuarioId", r.materia_id AS "materiaId", r.titulo, r.topicos, r.descricao, r.criado, m.nome AS materia FROM resumos r
         JOIN materias m ON r.materia_id = m.id
         WHERE r.usuario_id = $1`,
        [req.userId]
      );
    }

  resumos = resumos.rows.map(resumo => ({
    ...resumo, 
    topicos: resumo.topicos.split(",")
  }))

    return res.status(200).json(resumos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

