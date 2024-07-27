// # Pior lutador

// ## Problema
// Em outra parte do programa, você, como desenvolvedor de software do UFC (entidade que organiza torneios de artes maciais mistas), deve implementandar a funcionalidade do site que mostrará o pior lutador do mundo segundo o ranking.
// Seu programa deve **RETORNAR** o nome do pior lutador.

// ##Código
function solucao(rank: string[]): string {
  const rank1 = ["Ana", "Beatriz", "Camila", "Jorgiane", "Maria", "Carla"]

  return rank[rank.length - 1]

  console.log(solucao(rank1))
}

export default solucao;