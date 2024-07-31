// # Verificar CPF Cadastrado

// ## Problema
// Você está implementando a funcionalidade do sistema web que está desenvolvendo que impede que dois usuários sejam cadastrados com o mesmo CPF, já que esse número é único.
// Seu programa deve **RETORNAR**:
// - `CPF JA CADASTRADO`: caso o CPF digitado já exista no sistema
// - `CADASTRO REALIZADO COM SUCESSO`: caso contrário

// ##Código
function solucao(cpfsCadastrados: string[], cpfDigitado: string): string {
  if (cpfsCadastrados.includes(cpfDigitado)) {
    return "CPF JA CADASTRADO"
  }
  return "CADASTRO REALIZADO COM SUCESSO"
}
export default solucao;