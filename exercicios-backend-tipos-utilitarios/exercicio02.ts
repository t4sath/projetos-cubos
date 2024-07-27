// ## Tipo para carrinho de compra

// ### Problema
// No arquivo `tipoCarrinhoCompra.ts`, dentro da pasta referente à essa questão, foi implementado um tipo para ser usado nas funções que fazem a gestão do carrinho de compras de um site. Porém, a estrutura do tipo não tinha o endereço de entrega, e a propriedade `tipoTransacao`, que tem um tipo literal, precisa ser padronizada para que aceite apenas caracteres minúsculos.
// Como precisamos manter a integridade do projeto e o tipo já foi usado em outras funções no projeto, implemente um novo tipo, partindo do atual, e adicione uma propriedade `endereco`, que receberá um objeto com o formato abaixo. Manipule o tipo da propriedade `tipoTransacao` para aceitar apenas caracteres minúsculos.
// - cep
// - rua
// - bairro
// - cidade
// - estado
// Não é necessário transpilar o código.

// ##Código
//Original
type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'Debito' | 'credito',
    cartao: Cartao
}

type Endereco = {
    cep: string
    rua: string
    bairro: string
    cidade: string
    estado: string
}


//Modificado
type novoCarrinho = {
    item: Item
    qtd: number
    desconto: number
    frete: number
    tipoTransacao: Transacao
    endereco: Endereco
    cartao: Cartao
}

type TransacaoCredito = 'credito'
type TransacaoDebito = 'Debito'
  type Transacao = Lowercase<TransacaoCredito> | Lowercase<TransacaoDebito>

const novoItem: Item = {
    nome: 'bolsa',
    descricao: 'bolsa de couro',
    valor: 200
}

const novoCartao: Cartao = {
    numero: 3333,
    validade: '05/09',
    nome: 'Maria',
    cvv: 987
}

const novoEndereco: Endereco = {
    cep: '9748594',
    rua: 'rua teste',
    bairro: 'bairro teste',
    cidade: 'cidade teste',
    estado: 'estado'
}

const novaTransacao: Transacao = 'credito'

const carrinho: novoCarrinho = {
    item: novoItem,
    qtd: 2,
    desconto: 10,
    frete: 20,
    tipoTransacao: novaTransacao,
    endereco: novoEndereco,
    cartao: novoCartao,
}

console.log(carrinho)