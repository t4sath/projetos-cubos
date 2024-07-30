// # E-mail válido

// ## Problema
// Você está desenvolvendo a funcionalidade que verificará se o e-mail digitado pelo usuário no cadastro dos seus dados pessoais é válido.
// Para ser um e-mail válido, ele deve conter um caracter "@".
// Seu programa deve **RETORNAR**:
// - `VALIDO`: se o e-mail digitado for válido
// - `INVALIDO`: se o e-mail digitado for não válido

// ##Código
function solucao(email: string): string {
  if (email.includes("@")) {
    return "VALIDO"
  } else {
    return "INVALIDO"
  }
}

export default solucao;