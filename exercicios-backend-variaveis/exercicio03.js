// ##Quantidade de Cerca 

// ##Problema
// Você foi contratado para desenvolver um programa que calcule a quantidade de terreno necessária para cercar um terreno.
// Os terrenos possuem forma retangular. A quantidade de arranjos necessários é dada por: quantidade = comprimento * 2 + largura * 2
// Você deve RETORNAR a quantidade de arranjo necessária para cercar o terreno.


// ##Código
function solucao(comprimento, largura) {
    let comprimento = 20
    let largura = 15
     const quantidade = (2 * comprimento) + (2 * largura)
  
    console.log(quantidade)
    return quantidade
  }
  
  module.exports = solucao;