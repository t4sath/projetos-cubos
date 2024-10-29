import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

interface DecodedToken {
  id: string;
}

export const validarToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensagem: "Falha na autenticação" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
    req.userId = decoded.id; 
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ mensagem: "Falha na autenticação" });
  }
};
