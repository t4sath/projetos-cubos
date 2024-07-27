// ##Desconto de uma compra 

// ##Problema
// Você foi contratado por uma loja de roupas da sua cidade para desenvolver um sistema de vendas online.
// Uma das partes do sistema, de sua responsabilidade o desenvolvimento, é o cálculo do desconto.
// O preço de um produto com o desconto é dado por: Preço final = Preço sem desconto - Preço sem desconto * Valor desconto. 
// Você deve RETORNAR o preço a ser pago com o desconto.


// ##Código
function solucao(preco, valorDesconto) {
    let preco = 10
    let valorDesconto = 30
     const descontoDecimal = valorDesconto / 100
     const precoFinal = preco - (preco * descontoDecimal)
  
    console.log(precoFinal)
    return precoFinal
  }
  
  module.exports = solucao;
  

