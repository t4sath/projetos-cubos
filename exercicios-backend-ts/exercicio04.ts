// ##Bônus por fase

// ##Problema
// Agora vamos desenvolver a parte do jogo Cubos Game responsável por bonificar o jogador que conseguir passar de fase. O bônus funciona da seguinte forma: os pontos do jogador são multiplicados pelo número da fase que ele acabou de passar. Desta forma, quanto mais longe o jogador chega, maior a bonificação. Por exemplo:
// se o jogador tiver passado da Fase 1, a pontuação será multiplicada por 1
// se o jogador tiver passado da Fase 2, a pontuação será multiplicada por 2
// se o jogador tiver passado da Fase 3, a pontuação será multiplicada por 3
// e assim por diante.
// Você deve RETORNAR a nova pontuação do jogador.

// ##Código
function solucao(pontuacao: number, faseSeguinte: number): number {
    // const pontuacao: number = 2000
    // const faseSeguinte: number = 4
    const faseAtual: number = faseSeguinte - 1
     const novaPontuacao: number = pontuacao * faseAtual 
  
    console.log(novaPontuacao)
    return novaPontuacao
  }
  
  export default solucao;
  