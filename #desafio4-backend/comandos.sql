CREATE DATABASE resume_ai

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha TEXT NOT NULL
);

CREATE TABLE materias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE resumos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  materia_id INTEGER REFERENCES materias(id),
  titulo VARCHAR(255) NOT NULL,
  topicos TEXT NOT NULL,
  descricao TEXT NOT NULL,
  criado TIMESTAMP DEFAULT NOW()
);

INSERT INTO materias (nome) VALUES
  ('Back-end'), ('Front-end'), ('Carreira'),
  ('Mobile'), ('Design'), ('Dados');


SELECT * FROM materias

SELECT * FROM resumos

SELECT * FROM usuarios

INSERT INTO usuarios (nome, email, senha) VALUES
('Alice Silva', 'alice@example.com', 'senhaSegura1'),
('João', 'joao@email.com', 'senha123'),
('Bruno Oliveira', 'bruno@example.com', 'senhaSegura2'),
('Carla Pereira', 'carla@example.com', 'senhaSegura3'),
('Maria', 'maria@email.com', 'senha444'),
('Duda', 'duda@email.com', 'sen436'),
('Daniel Costa', 'daniel@example.com', 'senhaSegura4'),
('Eduarda Santos', 'eduarda@example.com', 'senhaSegura5'),
('Felipe Lima', 'felipe@example.com', 'senhaSegura6');

SELECT * FROM usuarios WHERE email = 'joao@email.com';

INSERT INTO resumos (usuario_id, materia_id, titulo, topicos, descricao) 
VALUES ($1, $2, 'Introdução ao SQL', 'O que é SQL?, Tipos de Dados em SQL, Comandos Básicos: SELECT, INSERT, UPDATE, DELETE, Joins e Subconsultas, Funções de Agregação, Normalização e Modelagem de Dados', 'Este resumo aborda os conceitos fundamentais do SQL, uma linguagem essencial para manipulação de bancos de dados relacionais. Vamos explorar comandos básicos, tipos de dados e práticas recomendadas para uma modelagem de dados eficiente.') 
RETURNING *;

UPDATE resumos
SET materia_id = $1
WHERE id = $2;

INSERT INTO resumos (usuario_id, materia_id, titulo, topicos, descricao) 
VALUES ($1, $2, 'Introdução ao HTML', 'Estrutura básica do HTML, Elementos e tags, Atributos de elementos, Semântica do HTML, Boas práticas na escrita de HTML', 'O HTML (HyperText Markup Language) é a linguagem padrão utilizada para criar páginas web. Ele fornece a estrutura básica que compõe uma página, utilizando uma série de elementos e tags que definem o conteúdo e a apresentação. Uma compreensão sólida do HTML é fundamental para desenvolvedores back-end, pois a integração entre o front-end e o back-end é crucial para criar aplicações web dinâmicas e funcionais.') 
RETURNING *;

INSERT INTO resumos (usuario_id, materia_id, titulo, topicos, descricao) 
VALUES ($1, $2, 'Criando Aplicações com FlutterFlow', 'O que é FlutterFlow?, Vantagens do uso de FlutterFlow, Criando um projeto no FlutterFlow, Widgets e design de UI, Integração com APIs', 'FlutterFlow é uma plataforma que permite o desenvolvimento de aplicativos móveis utilizando a linguagem Flutter de forma visual. Com uma interface intuitiva, os desenvolvedores podem criar aplicações sem a necessidade de escrever código manualmente, acelerando o processo de desenvolvimento e permitindo protótipos rápidos. A integração com APIs e a personalização de widgets tornam o FlutterFlow uma ferramenta poderosa para o desenvolvimento front-end.') 
RETURNING *;

INSERT INTO resumos (usuario_id, materia_id, titulo, topicos, descricao) 
VALUES ($1, $2, 'Dominando TypeScript no Desenvolvimento Backend', 'O que é TypeScript?, Vantagens do TypeScript em comparação ao JavaScript, Tipos de dados e interfaces, Classes e herança, Integração com Node.js', 'TypeScript é uma linguagem de programação que se baseia no JavaScript, adicionando tipagem estática e recursos de programação orientada a objetos. Com TypeScript, os desenvolvedores podem escrever código mais robusto e menos propenso a erros, facilitando a manutenção e escalabilidade de projetos. A integração com Node.js permite o desenvolvimento de aplicações backend de forma eficiente, aproveitando todas as vantagens da tipagem e das interfaces.') 
RETURNING *;

INSERT INTO resumos (usuario_id, materia_id, titulo, topicos, descricao) VALUES
(1, 1, 'Introdução ao Back-end', 'API, Banco de Dados, Autenticação', 'Descrição sobre conceitos básicos de Back-end.'),
(2, 2, 'Fundamentos de Front-end', 'HTML, CSS, JavaScript', 'Descrição sobre a criação de interfaces de usuário.'),
(3, 3, 'Planejamento de Carreira', 'Objetivos, Networking, Habilidades', 'Descrição sobre como construir uma carreira de sucesso.'),
(1, 4, 'Desenvolvimento Mobile', 'React Native, Flutter, UX', 'Descrição sobre as melhores práticas em desenvolvimento mobile.');

INSERT INTO resumos (usuario_id, materia_id, titulo, topicos, descricao) VALUES
(2, 5, 'Princípios de Design', 'Estética, Funcionalidade, Acessibilidade', 'Descrição sobre os fundamentos do design eficaz.'),
(1, 6, 'Análise de Dados', 'Coleta, Visualização, Interpretação', 'Descrição sobre como analisar dados para obter insights.'),
(3, 1, 'Back-end com Node.js', 'Express, MongoDB, RESTful', 'Descrição sobre o uso de Node.js no desenvolvimento back-end.'),
(2, 2, 'Frameworks Front-end', 'React, Vue, Angular', 'Descrição sobre os principais frameworks de front-end.'),
(1, 4, 'Mobile com Flutter', 'Widgets, Estado, UI', 'Descrição sobre desenvolvimento mobile utilizando Flutter.');

SELECT * FROM resumos WHERE usuario_id = 1;

SELECT r.*, m.nome AS materia 
FROM resumos r
JOIN materias m ON r.materia_id = m.id
WHERE r.usuario_id = $1 AND m.nome = $2;

SELECT * FROM resumos WHERE id = $1 AND usuario_id = $2;

UPDATE resumos
SET titulo = $1, topicos = $2, descricao = $3, materia_id = $4
WHERE id = $5 AND usuario_id = $6;

DELETE FROM resumos WHERE id = $1 AND usuario_id = $2;

SELECT COUNT(*) AS quantidade 
FROM resumos 
WHERE EXTRACT(MONTH FROM criado) = $1 AND EXTRACT(YEAR FROM criado) = $2

