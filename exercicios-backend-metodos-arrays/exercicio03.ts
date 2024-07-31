// # Agendamento de pacientes

// ## Problema
// Você trabalha como desenvolvedor de software para uma clínica médica. No momento, você está desenvolvendo a funcionalidade do sistema responsável pelo cancelamento de agendamentos de consultas.
// Seu programa deve **RETORNAR**:
// - Agenda atualizada sem o nome do paciente que solicitou o cancelamento, caso o paciente tenha sido agendado
// - `PACIENTE NAO AGENDADO`: caso o paciente não tenha sido agendado

// ##Código
function solucao(agenda: string[], cancelamento: string): string | string[] {
  const index = agenda.indexOf(cancelamento)

  if (index === -1) {
    return "PACIENTE NAO AGENDADO"
  }

  agenda.splice(index, 1)
  return agenda
}
export default solucao;
