// # Catálogo de Livros

// ## Problema
// Você, como desenvolvedor contratado pela biblioteca pública da sua cidade, está desenvolvendo um sistema de catalogação de livros. Uma das funcionalidades essenciais é a capacidade de inverter a ordem dos livros em uma prateleira.
// Seu programa deve **RETORNAR**:
// - livros na ordem inversa, caso haja algum livro catalogado
// - `NENHUM LIVRO ENCONTRADO`: caso não haja nenhum livro catalogado

// ##Código
function solucao(livros: string[]): string | string[] {
  if (livros.length === 0) {
    return "NENHUM LIVRO ENCONTRADO"
  } return livros.reverse()
}

export default solucao;