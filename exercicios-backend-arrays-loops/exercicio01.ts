// # Pódio

// ## Problema
// Você, como desenvolvedor de software do UFC (entidade que organiza torneios de artes maciais mistas), está implementando a funcionalidade do site que será responsável por mostrar ao usuário os três lutadores mais bem rankeados do mundo, ou seja, os três melhores lutadores do mundo.
// Seu programa deve **RETORNAR** os três melhores lutadores no seguinte formato
// ```
// "MELHOR_LUTADOR, SEGUNDO_MELHOR, TERCEIRO_MELHOR"
// ```
// ou seja, os nomes devem estar **SEPARADOS POR VÍGULA E UM ESPAÇO EM BRANCO (APENAS UM ESPAÇO) DEPOIS DA VÍRGULA**.

// ##Código
function solucao(rank: string[]): string {
  const rank1 = ["Ana", "Beatriz", "Camila", "Jorgiane", "Maria", "Carla"]

  const topTres = rank.slice(0, 3)
  return topTres.join(', ')

  console.log(solucao(rank1))
}

export default solucao;
