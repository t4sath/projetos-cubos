// # Conversão de temperatura

// ## Problema
// O Calor é a energia transferida de um corpo para o outro quando existe diferença de temperatura. Já temperatura é a medida de agitação das moléculas (pequenas partes que compõe um corpo).
// Quando dois ou mais corpos atingem a mesma temperatura dizemos que eles estão em equilíbrio térmico. Podemos então comparar estes objetos para fazer medidas. É assim que funciona o termômetro.
// Existem diversas escalas de temperatura. As mais conhecidas são Celsius, Fahrenheit e Kelvin.
// William Tomson, conhecido como Lord Kelvin, estudando o comportamento do gases, descobriu a menor temperatura que um corpo poderia atingir, que seria equivalente a -273°C. A partir daí determinou o ponto zero de sua escala. Criou assim o que chamamos de escala absoluta.
// A conversão de graus Celsius para Kelvin é dada pela fórmula
// $kelvin = celsius + 273$
// Seu programa deve **RETORNAR** a temperatura convertida para Kelvin.

// ##Código
function solucao(celsius: number) {
  return celsius + 273
}
export default solucao;