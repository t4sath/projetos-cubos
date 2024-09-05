import express from 'express';
import { Router } from "express";
import { inicializar } from "./controladores/inicio";
import { cadastrarUsuario, loginUsuario } from "./controladores/usuarios";
import validarMaxPreco from './middlewares.ts/maxPreco';
import { autenticacaoComprovante, cancelarComprovante, validarComprovante } from "./controladores/comprovantes";
import { cancelarCompra, listarCompras, realizarCompra } from "./controladores/compras";
import autenticarUsuario from "./middlewares.ts/usuarios";
import { listarEventos } from './controladores/eventos';
import { validarComprovanteMiddleware } from './middlewares.ts/comprovante';

const rotas = Router();
const app = express();
app.use(express.json());

rotas.get('/', inicializar);

// Usuário
rotas.post('/usuarios', cadastrarUsuario);
rotas.post('/login', loginUsuario);

// Eventos
rotas.get('/eventos', validarMaxPreco, listarEventos);

// Compras
rotas.post('/compras', realizarCompra, validarComprovanteMiddleware, autenticacaoComprovante, validarComprovante, listarCompras);
rotas.delete('/compras/:id', listarCompras, cancelarCompra, autenticacaoComprovante, cancelarComprovante);
 
export default rotas;