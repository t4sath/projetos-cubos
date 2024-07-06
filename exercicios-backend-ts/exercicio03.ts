##Dados do personagem

##Problema
O jogador deverá conseguir mostrar os dados do seu personagem no jogo Cubos Game.
Você deve RETORNAR os dados do personagem no seguinte formato:
OLÁ, |FULANO|. VOCE É UM |CLASSE| COM PONTUAÇÃO ATUAL DE |PONTUACAO_ATUAL|
Você deve substituir |FULANO|, |CLASSE| e |PONTUACAO_ATUAL| por, respectivamente, o nome, a classe e a pontuação do jogador.


##Código
function solucao(
    nomePersonagem: string,
    classe: string,
    pontuacao: number
  ): string {
    const nomePersonagem: string = 'Shaolin Matador de Porco'
    const classe: string = 'Mago'
    const pontuacao: number = 320
     const dadosPersonagem: string = 'OLÁ, ' + nomePersonagem + '. VOCE É UM ' + classe + ' COM PONTUAÇÃO ATUAL DE ' + pontuacao
    
    console.log(dadosPersonagem)
    return dadosPersonagem
  }
  
  export default solucao;
  
