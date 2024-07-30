// # CPF válido

// ## Problema
// Você está desenvolvendo a funcionalidade que verificará se o CPF digitado pelo usuário no cadastro dos seus dados pessoais é válido.
// Para ser um CPF válido, ele deve:
// - conter 11 digítos
// - possuir um traço
// - depois do traço, deve ter apenas dois digitos.
// Ou seja, ele deve ter o seguinte formato
// ```
// XXXXXXXXXX-XX
// ```
// Veja que tem-se 11 dígitos desconsiderando o traço.
// Seu programa deve **RETORNAR**:
// - `CPF VALIDO`: se o CPF digitado for válido
// - `CPF INVALIDO`: se o CPF digitado for não válido

// ##Código
function solucao(cpf: string): string {
  const regex = /^[0-9]{9}-[0-9]{2}$/

  if (regex.test(cpf)) {
    return "CPF VALIDO"
  } else {
    return "CPF INVALIDO"
  }
}

export default solucao;
