##Quantidade de carne

##Problema
Você está desenvolvendo um programa que calcula a quantidade de carne que deverá ser comprada para o churrasco anual da sua família.
A quantidade de carne é calculada da seguinte forma:
100 gramas para cada criança na festa
200 gramas para cada pré-adolescente
300 gramas para cada adulto
Você deve RETORNAR a quantidade de carne estimada, em gramas.

##Código
function solucao(
    quantidadeCriancas: number,
    quantidadePreAdolescentes: number,
    quantidadeTotal: number
  ): number {
    const quantidadeCriancas: number = 20
    const quantidadePreAdolescentes: number = 10
    const quantidadeTotal: number = 100
     const carnePorCrianca: number = 100
     const carnePorPreAdolescentes: number = 200
     const carnePorAdulto: number = 300
       const quantidadeAdultos: number = quantidadeTotal - (quantidadeCriancas + quantidadePreAdolescentes)
       const carneTotal: number = (quantidadeCriancas * carnePorCrianca) + (quantidadePreAdolescentes * carnePorPreAdolescentes) + (quantidadeAdultos * carnePorAdulto)
  
    console.log(carneTotal)
    return carneTotal
  }
  
  export default solucao;
  