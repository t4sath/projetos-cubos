// # Cadastro de usuários

// ## Problema
// Você está desenvolvendo a funcionalidade de cadastro de um novo usuário.
// Uma regra de negócio a ser verificada é que dois usuários não podem ter o mesmo e-mail. Sendo assim, antes de efetuar o cadastro do usuário no sistema, você deve verificar se o e-mail digitado por ele é válido.
// Seu programa deve **RETORNAR**:
// - A nova lista de usuários cadastrados, caso o e-mail seja válido
// - `E-MAIL INVALIDO`: se o número digitado já pertencer a outro usuário cadastrado no sistema

// ##Código
type TUsuario = {
  nome: string;
  email: string;
  senha: string;
};

function solucao(
  usuariosCadastrados: TUsuario[],
  novoUsuario: TUsuario
): TUsuario[] | string {
  const emailExistente = usuariosCadastrados.some(
    (usuario) => usuario.email === novoUsuario.email
  );

  if (emailExistente) {
    return "E-MAIL INVALIDO"
  }

  return [...usuariosCadastrados, novoUsuario]
}
export default solucao;
