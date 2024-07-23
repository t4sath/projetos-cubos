# Períodos históricos

## Problema
Como forma de facilitar o estudo, podemos dividir a história da humanidade em quatro grandes períodos, também chamados de "Idades". São eles:
- Idade antiga: vai de 4000 anos a.C., até a queda do Império Romano do Ocidente, em 476 da era cristã;
- Idade média: tem início depois de 476 e vai até a tomada de Constantinopla, pelos turcos otomanos, em 1453;
- Idade moderna: tem início depois de 1453 e vai até o ano de 1789, data da Revolução Francesa;
- Idade contemporânea: tem início após 1789 até os dias atuais.
Crie um programa que ao receber um ano retorne qual o período da história aquele ano se refere.

Você deve RETORNAR na tela qual o período da história o ano está inserido:
- `ANTIGA`: se o ano estiver no período da idade antiga
- `MEDIA`: se o ano estiver no período da idade média
- `MODERNA`: se o ano estiver no período da idade moderna
- `CONTEMPORANEA`: se o ano estiver no período da idade comtemporânea


##Código:
export default function solucao(ano: number): string {
  if (ano <= 476) {
    return "ANTIGA"
} else if (ano <= 1453) {
    return "MEDIA"
} else if (ano <= 1789) {
    return "MODERNA"
} else {
    return "CONTEMPORANEA"

console.log(ano)
return ano
}
}
