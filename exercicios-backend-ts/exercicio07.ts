// ##Cálculo do IMC

// ##Problema
// Você, como desenvolvedor de software de um grupo farmacéutico, deve implementar uma funcionalidade nova no programa da empresa: o cálculo do Índice de Massa Corporal.
// O IMC é cálculado como: peso / altura * altura
// Você deve RETORNAR o IMC.

// ##Código
function solucao(peso: number, altura: number): number {
    // const peso: number = 100
    // const altura: number = 2
     const imc: number = peso / (altura * altura)
  
    console.log(imc)
    return imc
  }
  
  export default solucao;
  