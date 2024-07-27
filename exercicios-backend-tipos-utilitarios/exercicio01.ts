// ## Reaproveitamento de tipos

// ### Problema
// A implementação da função `cadastrarUsuário` utiliza o tipo `Usuario` para definir a estrutura necessária para cadastrar um usuário. Em uma outra função, que será implementada futuramente, haverá a necessidade de receber os dados do usuário da mesma forma que foi passada no cadastro, exceto a propriedade `rg`, com todos os demais campos obrigatórios.
// Para que o tipo atual não seja modificado, visto que o tipo `Usuario` já esta sendo utilizado, utilize os tipos utilitários para criar um outro tipo de acordo com essa nova regra.
// Não é necessário transpilar o código.

// ##Código
//Original
type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}


//Modificado
type UsuarioSemRG = Omit<Usuario, 'rg'>;

function novaFuncao(usuario: UsuarioSemRG) {
  return usuario;
}

const usuario: UsuarioSemRG = {
    nome: 'João',
    email: 'joao@example.com',
    cpf: '1234567'
  };
  novaFuncao(usuario);