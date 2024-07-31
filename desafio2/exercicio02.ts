// # Mercado de Câmbio

// ## Problema
// O mercado de câmbio, também conhecido como mercado Forex (Foreign Exchange), é onde as moedas são negociadas. Funciona de forma descentralizada, o que significa que não há uma única bolsa central onde todas as transações ocorrem. Em vez disso, o mercado de câmbio é composto por uma rede global de bancos, instituições financeiras, corretoras e traders que compram e vendem moedas.
// Os participantes do mercado compram uma moeda e vendem outra simultaneamente, esperando que o valor da moeda comprada aumente em relação à moeda vendida.
// O resultado (lucro ou prejuízo) de uma operação pode ser calculado como
// $resultado = (preco ~ na ~ venda - preco ~ na ~ compra) \cdot valor ~ investido$
// Se o valor for positivo, o investidor teve lucro; se negativo, prejuízo.
// Você está desenvolvendo um programa para calcular o resultado de uma operação realizada nesse mercado.
// Seu programa deve **RETORNAR** o resultado da operação realizada.

// ##Código
function solucao(
  precoVenda: number,
  precoCompra: number,
  valorInvestido: number
) {
  const resultado = (precoVenda - precoCompra) * valorInvestido
  return resultado
}
export default solucao;