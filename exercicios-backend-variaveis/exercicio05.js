// ##Gestão de estoque

// ##Problema
// Você, como desenvolvedor de uma loja de açaí, deve desenvolver uma funcionalidade para o sistema de gerenciamento de estoque que retorne verdadeiro (true) caso a loja esteja precisando comprar mais produto ou falso (false), caso contrário.
// A loja faz o pedido de mais produtos quando a quantidade de litros de açaí está abaixo de 40.
// Você deve RETORNAR true , caso a empresa deva fazer compras, ou *false, caso contrário.


// ##Código
function solucao(quantidadeAcai) {
    let quantidadeAcai = 30
    const nivelMinimo = 40
     let necessidadeCompra = quantidadeAcai < nivelMinimo
  
    console.log(necessidadeCompra)
    return necessidadeCompra
  }
  
  module.exports = solucao;
  