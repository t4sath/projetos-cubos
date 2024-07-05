##Cálculo da idade

##Problema
O jogo Cubos Game, para o qual foi contratado para fazer, só poderá ser jogado por maiores de 16 anos. Sendo assim, será necessário criar uma função que calcule a idade do jogador com base no seu ano de nascimento.
Você deve RETORNAR a idade do jogador.
OBS: Não serão levados em consideração o mês e o dia no cálculo.


##Código

function solucao(anoNascimento: number, anoAtual: number): number {
    let anoNascimento: number = 1993
    let anoAtual: number = 2024
     const idade: number = anoAtual - anoNascimento
  
    console.log(idade)
    return idade
  }
  
  export default solucao;