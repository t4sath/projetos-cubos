// ##Atualização da pontuação

// ##Problema
// Você foi contratado pela Ubisoft, uma das maiores empresas de desenvolvimento de jogos eletrônicos do mundo, para desenvolver o Cubos Game, um novo jogo para Playstation 5.
// Foi atribuida a você a tarefa de desenvolver a função responsável por atualizar a pontuação do personagem do jogo.
// Você deverá RETORNAR a nova pontuação do jogador.


// ##Código
function solucao(pontuacao: number, pontosConquistados: number): number {
    // let pontuacao = 300
    // let pontosConquistados = 200
     const novaPontuacao: number = pontuacao + pontosConquistados
  
    console.log(novaPontuacao)
    return novaPontuacao
  }
  
  export default solucao;
  