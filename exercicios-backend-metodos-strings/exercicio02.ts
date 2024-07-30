// # Filtro de comentários

// ## Problema
// Assim como o YouTube bloqueia vídeos que citam as palavras "pandemia" ou "covid", uma rede social precisa bloquear qualquer comentário que também possua uma dessas duas palavras.
// Você está responsável por desenvolver essa lógica.
// **DICA:** para não precisar se preocupar com letras maiúsculas e minúsculas, faça uma transformação na entrada para que ela fique ou toda em maiúscula ou toda em minúscula.
// Seu programa deve **RETORNAR**:
// - `true`: caso o comentário não possua nenhuma dessas palavras
// - `false`: caso o comentário possua alguma dessas palavras

// ##Código
function solucao(comentario: string): boolean {
  const comentarioLowerCase = comentario.toLowerCase()

  if (comentarioLowerCase.includes("pandemia") || comentarioLowerCase.includes("covid")) {
    return false
  } else {
    return true
  }
}
export default solucao;