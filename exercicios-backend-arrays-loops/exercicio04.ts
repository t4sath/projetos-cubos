// # Robô separador de frutas

// ## Problema
// Um robô precisa coletar frutas de uma esteira e colocar numa caixa. Ele usa um sistema de câmeras para identificar quais frutas estão passando.
// Você foi contratado pela empresa para realizar a programação deste robô e criar um sistema que mostre aos operadores a quantidade de frutas que o robô coletou. A esteira de frutas é representada por um array em que cada posição armazena uma fruta diferente que passou pela esteira. O robô recebe como parâmetro qual fruta ele deve coletar.
// Você deve **RETORNAR** a quantidade de frutas que o robô coletou.

// ##Código
function solucao(frutaColetada: string, esteira: string[]): number {
  const frutaColetada1 = "BANANA"
  const esteira1 = ["UVA", "ACEROLA", "MANGA", "PERA", "CAJU", "CAJU", "BANANA", "UVA", "LARANJA", "MARACUJA", "MELANCIA"]

  return esteira.filter(fruta => fruta === frutaColetada).length

  console.log(solucao(frutaColetada1, esteira1))
}

export default solucao;