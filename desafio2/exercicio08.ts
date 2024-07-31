// # Despacho de mala

// ## Problema
// Você, como desenvolvedor de software do aeroporto de Guarulhos, deve desenvolver um programa que mostrará a lista de passageiros que terão que pagar uma taxa imposta sobre malas que pesam mais de 23kg.
// Seu programa deve **RETORNAR**:
// - os nomes, separados pelo símbolo `" - "`, ou seja, por um espaço em branco, um traço e outro espaço em branco (veja o exemplo), dos passageiros que terão que pagar a taxa
// - `SEM PASSAGEIROS`: caso nenhum dos passageiros tenha que pagar a taxa

// ##Código
type TDadosMala = {
  nome: string;
  pesoMala: number;
};

function solucao(dadosPassageiros: TDadosMala[]) {
  const passageirosComTaxa = dadosPassageiros
  .filter(passageiro => passageiro.pesoMala > 23)
  .map(passageiro => passageiro.nome)

if (passageirosComTaxa.length === 0) {
  return "SEM PASSAGEIROS"
} else {
  return passageirosComTaxa.join(" - ")
}
}

export default solucao;