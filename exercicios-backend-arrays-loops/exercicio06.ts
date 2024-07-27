// # Fluxo de um elevador

// ## Problema
// Um engenheiro teve uma ideia para estudar o perfil do público majoritário (que é a maioria) de um determinado shopping. Ele observou que o shopping era dividido em dois departamentos:
// - Departamento de jogos;
// - Departamento de esportes.
// As lojas do primeiro departamento ficavam no primeiro andar; as do segundo departamento, no segundo andar. Para estimar qual departamento é mais visitado, ele decidiu analisar a quantidade de vezes que os botões do elevador eram apertados. Esse elevador possuia 3 botões:
// - A1: que vai para o primeiro andar (andar 1);
// - A2: que vai para o segundo andar (andar 2);
// - E: que vai para o estacionamento.
// Você deve implementar a lógica que, a partir de um array que salva os botões apertados, diga se o público daquele shopping é majoritariamente composto por atletas, por pessoas que gostam de vídeo game ou é um público diversificado.
// Você deve **RETORNAR**:
// - `NERD`: caso tenha sido apertado mais vezes o botão de ir para o primeiro andar (andar de jogos);
// - `ATLETA`: caso tenha sido apertado mais vezes o botão de ir para o segundo andar (andar de esportes);
// - `DIVERSIFICADO`: caso ambos os botões tenham sidos apertados na mesma quantidade.

// ##Código
function solucao(botoesApertados: string[]): string {
  const botoesApertados1 = ["A1", "A2", "E", "A1", "A2", "A2", "A1", "A1"]

  let countA1 = 0
  let countA2 = 0
  
  for (const botao of botoesApertados) {
      if (botao === "A1") {
          countA1++
      } else if (botao === "A2") {
          countA2++
      }
      if (countA1 > countA2) {
          return "NERD"
      } else if (countA2 > countA1) {
          return "ATLETA"
      } else {
          return "DIVERSIFICADO"
      }

    console.log(solucao(botoesApertados))
}
}

export default solucao