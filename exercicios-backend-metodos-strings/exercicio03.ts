// # Recuperar a senha

// ## Problema
// Você está desenvolvendo a funcionalidade de recuperação de senha de um sistemas.
// Quando o usuário quiser solicitar uma nova senha, ele deve informar se o número do celular cadastrado no sistema ainda corresponde ao número que ele usa. Por motivos de segurança, mostra-se apenas os dois primeiros e os dois últimos dígitos do número cadastrado precedidos de "\*". Por exemplo ao invés de mostrar
// ```
// 31012345678
// ```
// será mostrado
// ```
// 31*******78
// ```
// Seu programa deve **RETORNAR** o número formadado com os caracteres "\*".

// ##Código
function solucao(numeroCadastrado: string): string {
  const prefixo = numeroCadastrado.slice(0, 2)
  const sufixo = numeroCadastrado.slice(-2)

  const numAsteriscos = numeroCadastrado.length - 4

  const resultado = prefixo + '*'.repeat(numAsteriscos) + sufixo
  
  return resultado
}

export default solucao;
