# Controle de caixa de um ônibus

## Problema
Você foi contratado pela empresa de ônibus da sua cidade para desenvolver um programa para automatizar o processo de controle de caixa diário dos ônibus.
Todos os dias, um responsável deve entrar em cada ônibus e:
1. Ver quantas pessoas passaram pela roleta, número registrado por um sistema presente no próprio dispositivo;
2. Contar a quantidade de dinheiro no caixa;
3. Calcular, com base nesses valores e no preço da passagem, se está tudo certo com o caixa.
O valor esperado em caixa é obtido por:
$valorEsperado = (númeroPessoasPassaramPelaRoleta) x (valorPassagem)$.

Você deve RETONRAR:
- `TUDO CERTO`: caso o dinheiro em caixa seja igual ao dinheiro esperado
- `DINHEIRO SOBRANDO`: caso o dinheiro em caixa seja maior que o esperado
- `DINHEIRO FALTANDO`: caso o dinheiro em caixa seja menor que o esperado


##Código:
export default function solucao(
  marcacaoRoleta: number,
  quantidadeCaixa: number,
  precoPassagem: number
): string {
  const valorEsperado = marcacaoRoleta * precoPassagem

  if (quantidadeCaixa === valorEsperado) {
      return "TUDO CERTO"
  } else if (quantidadeCaixa > valorEsperado) {
      return "DINHEIRO SOBRANDO"
  } else {
      return "DINHEIRO FALTANDO"
  }

console.log(quantidadeCaixa)
return quantidadeCaixa
}