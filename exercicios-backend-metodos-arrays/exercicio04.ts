// # Fila ou pilha

// ## Problema
// Você está desenvolvendo um sistema de gerenciamento de pedidos para um restaurante movimentado. Para atender às diferentes necessidades do restaurante, esse sistema precisa suportar o armazenamento dos pedidos dos clientes tanto uma uma fila (primeiro a pedir e o primeiro a ser atendido) quanto em uma pilha (o último a pedir e o primeiro a ser atendido).
// Seu programa deve **RETORNAR** o novo array de pedidos.
// **OBS:** Observe que caso o tipo de atendimento seja `pilha`, o pedido solicitado deve ser inserido na primeira posição do array pedidos (essa pessoa terá prioridade para ser atendida); caso seja `fila`, deve ser inserido na última posição.

// ##Código
type TPedido = {
  nomeCliente: string;
  nomePrato: string;
  quantidade: number;
};

type TAtendimento = "fila" | "pilha";

function solucao(
  pedidoSolicitado: TPedido,
  pedidos: TPedido[],
  tipoDeAtendimento: TAtendimento
) {
  if (tipoDeAtendimento === "pilha") {
    pedidos.unshift(pedidoSolicitado);
  } else if (tipoDeAtendimento === "fila") {
    pedidos.push(pedidoSolicitado);
  }

  return pedidos;
}
export default solucao;
