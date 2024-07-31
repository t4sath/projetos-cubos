// # Entrega em atraso

// ## Problema
// Você, como desenvolvedor de uma empresa que possui um aplicativo de entregas, está desenvolvendo a funcionalidade que mostra ao usuário se a entrega dele está ou não em atraso.
// Seu programa deve **RETORNAR**:
// - `ENTREGA ATRASADA`: caso o dia atual seja posterior ao dia estimado para a entrega
// - `ENTREGA NAO ATRASADA`: caso o dia atual seja anterior ou igual ao dia estimado para a entrega

// ##Código
type TDados = {
  pedido: string;
  quantidade: number;
  estimativaEntrega: number;
};

function solucao(dadosEntrega: TDados, diaAtual: number) {
  if (diaAtual > dadosEntrega.estimativaEntrega) {
    return "ENTREGA ATRASADA"
  } else {
    return "ENTREGA NAO ATRASADA"
  }
}
export default solucao;