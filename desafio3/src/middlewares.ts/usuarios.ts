import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
    idUsuario?: string;
}

const autenticarUsuario = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ mensagem: "Token de autenticação não fornecido." });
    }

    try {
        const decoded = jwt.verify(token, 'sua-chave-secreta'); 
        req.idUsuario = (decoded as any).id; 
        next(); 
    } catch (error) {
        return res.status(401).json({ mensagem: "Token inválido ou expirado." });
    }
};

export default autenticarUsuario;