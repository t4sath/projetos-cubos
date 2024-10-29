import "dotenv/config";
import express, { Application, Request, Response, Router } from "express";
import { criarUsuario } from './controllers/criarUsuario'
import { login } from './controllers/login'
import { listarMaterias } from './controllers/listarMaterias'
import { criarResumo } from './controllers/criarResumo'
import { listarResumos } from './controllers/listarResumos'
import { validarToken } from './middlewares/validarToken'

const app: Application = express();
const rotas = Router();

app.use(express.json());

rotas.post('/usuarios', criarUsuario);
rotas.post('/login', login);

rotas.get('/materias', validarToken, listarMaterias);

rotas.post('/resumos', validarToken, criarResumo);
rotas.get('/resumos', validarToken, listarResumos);

app.use(rotas);

export default app;
