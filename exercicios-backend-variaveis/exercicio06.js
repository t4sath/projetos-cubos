// ##Quantidade de times completos

// ##Problema
// Você está desenvolvendo um programa para auxiliar no cálculo da quantidade de times que poderão ser formados em uma "pelada" (futebol) de final de semana que você participa com base no número de pessoas e na quantidade de jogadores que deverão entrar em campo em cada time.
// Seu programa deve ser capaz de dizer quantas pessoas ficarão sem time.
// Você deve RETORNAR a quantidade de pessoas que ficarão sem time.


// ##Código
function solucao(quantidadePessoas, quantidadeDeJogadoresEmCadaTime) {
    const quantidadeDeJogadoresEmCadaTime = 5
    let quantidadePessoas = 23
     let pessoasSemTime = quantidadePessoas % quantidadeDeJogadoresEmCadaTime
  
    console.log(pessoasSemTime)
    return pessoasSemTime
  }
  
  module.exports = solucao;
  