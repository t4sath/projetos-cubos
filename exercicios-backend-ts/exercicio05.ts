##Preço do conjunto

##Problema
Você foi contratado por uma loja de roupas da sua cidade para desenvolver um sistema de vendas online.
Uma das partes do sistemas, responsável por mostrar ao usuário do site o valor total da compra, depende de um código capaz de calcular o preço gasto pelo usuário em um conjunto de três peças. Essa é a funcionalidade que está desenvolvendo agora.
Você deve RETORNAR o preço total a ser pago.
Cuidado! As operações na programação seguem a mesma ordem de resolução da Matemática. Ou seja, primeiramente são feitas multiplicações e divisões, depois somas e subtrações.

##Código
function solucao(
    precoPeca1: number,
    precoPeca2: number,
    precoPeca3: number,
    quantidade: number
  ): number {
    const precoPeca1: number = 20
    const precoPeca2: number = 30
    const precoPeca3: number = 50
    const quantidade: number = 3
     const precoConjunto: number = precoPeca1 + precoPeca2 + precoPeca3
     const precoTotal: number = precoConjunto * quantidade
    
    console.log(precoTotal)
    return precoTotal
  }
  
  export default solucao;
  
