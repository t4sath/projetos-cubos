// ##Resultado concurso público

// ##Problema
// Você está criando um programa para ajudá-lo a saber se você passou ou não em um concurso público que está fazendo. Para isso, seu programa:
// Duas vezes por dia, envie uma requisição para o site da instituição que faz o concurso buscando uma lista de aprovados;
// Veja a lista de aprovados não encontrados (não tiver saído), seu programa não faz nada;
// Caso a lista de aprovados seja encontrada, ela é filtrada e é devolvida uma matriz contendo os números de inscrição dos aprovados
// Você está desenvolvendo a parte do programa que, ao receber a matriz com os números de inscrição dos aprovados, irá enviar uma notificação no celular demonstrando sua situação.

// A entrada do seu programa será composta por duas variáveis:
// aprovados: array de strings em que cada posição representa o número de inscrição de um aprovado;
// numeroInscricao: variável do tipo string que armazena seu número de inscrição.

// Você deve RETORNAR :
// APROVADO: caso seu número de inscrição esteja na lista.
// REPROVADO: caso não esteja.


// ##Código:
function solucao(aprovados: string[], numeroInscricao: string): string {
	if (aprovados.includes(numeroInscricao)) {
        return 'APROVADO';
    } else {
        return 'REPROVADO';
    }
}