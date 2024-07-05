##Quantidade de tinta

##Problema
Você está desenvolvendo um programa para auxíliar pintores a estimarem a quantidade de tinta que deve ser comprada para pintar uma parede retangular.
A área (A) de um retângulo é dada por: A = Comprimento * Largura.
E quantidade de tinta é dada por: Quantidade de tinta = A * rendimento.
Você deve RETORNAR a quantidade de tinta necessária para pintar a parede analisada.


##Código

function solucao(comprimento, largura, rendimento) {
    let comprimento = 10
    let largura = 20
    let rendimento = 40
     const A = comprimento * largura
     const quantidadeTinta = A * rendimento
  
    console.log(quantidadeTinta)
    return quantidadeTinta
  }
  
  module.exports = solucao;
  

