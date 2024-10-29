// # Programa fidelidade

// ## Problema
// Um programa de fidelidade em um supermercado oferece descontos aos clientes com base na quantidade total de pontos acumulados. A política de descontos é a seguinte:
// - Se um cliente acumular menos de 100 pontos, não receberá nenhum desconto.
// - Se um cliente acumular de 100 a 500 pontos, receberá um desconto de 10% em suas compras.
// - Se um cliente acumular mais de 500 pontos, receberá um desconto de 20% em suas compras.
// Escreva um programa que calcule o valor total da compra com base na política de desconto do programa de fidelidade.
// O valor total da compra é calculado como
// $valor ~ total = valor ~ compra - desconto \cdot valor ~ compra$
// Seu programa deve **RETORNAR** o valor total da compra (valor com o desconto aplicado).

// ##Código
function solucao(pontosAcumulados: number, valorCompra: number) {
  let desconto = 0

  if (pontosAcumulados >= 100 && pontosAcumulados <= 500) {
    desconto = 0.1
  } else if (pontosAcumulados > 500) {
    desconto = 0.2
  }

  const valorTotal = valorCompra - (desconto * valorCompra)
  return valorTotal
}
export default solucao;