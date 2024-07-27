// # Dupla de prova

// ## Problema
// Uma escola resolveu implementar um sistema de provas no qual a última prova de cada matéria é feita em dupla. A escola espera que isso ajude os alunos que estão indo mal a não desistirem.
// Para não prejudicar os bons alunos, a escola decidiu que a diferença entre as notas dos dois alunos da dupla deveria ser menor que 1.5 pontos, pois, desta forma, a dupla estaria equilibrada com estudantes que estão com rendimentos próximo. Isso evitaria que algum aluno que estivesse com nota alta tivesse que fazer dupla com algum com nota muito baixa.
// Você foi contratado pela escola para implementar o programa que indique aos professores se a dupla que eles estão formando é ou não válida de acordo com critério estabelecido acima.

// Você deve RETORNAR:
// - `DUPLA VALIDA`: se a diferença entre as notas for menor que 1.5
// - `DUPLA INVALIDA`: caso contrário


// ##Código:
export default function solucao(
  notaAlunoA: number,
  notaAlunoB: number
): string {
  const diferenca = Math.abs(notaAlunoA - notaAlunoB)
  if (diferenca < 1.5) {
      return "DUPLA VALIDA"
  } else {
      return "DUPLA INVALIDA"
  }

console.log(diferenca)
}