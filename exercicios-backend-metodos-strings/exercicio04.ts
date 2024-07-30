// # Número válido

// ## Problema
// Você está desenvolvendo a funcionalidade que verificará se o número digitado pelo usuário no cadastro do seu endereço é válido.
// Seu programa deve **RETORNAR**:
// - `true`: se o número digitado for válido
// - `false`: se o número digitado for não válido

// ##Código
function solucao(endereco: string): boolean {
  const partes = endereco.split(", ")
  const numeroDaCasa = partes[1]
  const ehValido = /^[0-9]+$/.test(numeroDaCasa)

return ehValido
}

export default solucao;
