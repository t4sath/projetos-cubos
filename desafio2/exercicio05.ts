// # Vendas semanais

// ## Problema
// Você trabalha como desenvolvedor para uma rede de lojas e está desenvolvendo uma funcionalidade para calcular o valor total das vendas realizadas durante uma semana.
// Seu programa deve **RETORNAR** o valor total das vendas na semana.

// ##Código
function solucao(vendasDiarias: number[]) {
  let totalVendas = 0

  for (let venda of vendasDiarias) {
    totalVendas += venda
  }

  return totalVendas
}
export default solucao;
