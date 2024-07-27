// # Temperatura ideal da cerveja

// ## Problema
// Você foi contratado pela Cubos Beer Bar, um bar da Cubos destinado a pessoas que gostam de consumir cervejas.
// Em uma reportagem de 2018, a Super Abril destaca que, por causa diversos fatores, dentre eles a diferença entre as cervejas, "não existe uma única temperatura ideal" para elas. Nessa reportagem, ela também destaca alguns tipos de cervejas e as respectivas temperaturas ideais de o consumo:
// - Cerveja pilsen: de 0 a 4 ºC;
// - Cerveja de trigo: 4 a 6 ºC;
// - Cerveja IPA: de 7 a 10 ºC.
// Você deve criar um programa que identifique se uma determinada cerveja que será servida a um cliente está na temperatura ideal para consumo.

// Você deve RETORNAR na tela:
// `TEMPERATURA IDEAL`: caso a cerveja a ser servida esteja na temperatura ideal;
// `TEMPERATURA NAO IDEAL`: caso a cerveja a ser servida NÃO esteja na temperatura ideal.


// ##Código:
export default function solucao(cerveja: string, temperatura: number): string {
  const ipa : number = 7
  const pilsen : number = 3
  const trigo : number = 5

  switch (cerveja) {
    case 'pilsen':
        if (temperatura >= 0 && temperatura <= 4) {
            return "TEMPERATURA IDEAL"
        }
        break;
    case 'trigo':
        if (temperatura >= 4 && temperatura <= 6) {
            return "TEMPERATURA IDEAL"
        }
        break
    case 'ipa':
        if (temperatura >= 7 && temperatura <= 10) {
            return "TEMPERATURA IDEAL"
        }
        break
    default:
        return "TIPO DE CERVEJA INVALIDO"
}
  return "TEMPERATURA NAO IDEAL"

console.log(pilsen, ipa, trigo)
}