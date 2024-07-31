// # Criptografia

// ## Problema
// Quando um usuário faz cadastro em um sistema ou quando ele decide atualizar sua senha, é realizada uma criptografia, que é a conversão de texto simples legível por humanos em texto incompreensível. Essa prática protege as senhas dos usuários contra acesso não autorizado por parte de invasores. Mesmo que o banco de dados (local onde a senha criptografada fica armazenada) seja comprometido, as senhas não podem ser facilmente decifradas.
// Você está desenvolvendo a parte do programa responsável pelo login do usuário. Essa funcionalidade é responsável por comparar a senha digitada pelo usuário com a senha criptografada que vem do banco de dados.
// A criptografia usada no projeto é simples. Para criptografar a senha é adicionado ao início e ao fim a palavra "cubos". Por exemplo, se a senha escolhida pelo usuário for "1234", a senha criptografada é "cubos1234cubos".
// Seu programa deve **RETORNAR**:
// - `LOGIN NAO AUTORIZADO`: caso a senha não esteja correta
// - `LOGIN AUTORIZADO`: caso a senha esteja correta

// ##Código
function solucao(senhaDigitada: string, senhaCriptografada: string) {
  const senhaDescriptografada = senhaCriptografada.slice(5, -5)
  
  if (senhaDigitada === senhaDescriptografada) {
    return "LOGIN AUTORIZADO"
  } else {
    return "LOGIN NAO AUTORIZADO"
  }
}
export default solucao;