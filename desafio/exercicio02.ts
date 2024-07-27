// ##Cerveja gelando mais rápido

// ##Problema 
// Em uma repostagem intitulada "Como gelar cerveja em três minutos", a revista Galileu explica a ciência por traz da técnica muito conhecida para fazer com que a cerveja fique gelada mais rápido: jogar sal no isopor com gelo. Segundo a revista:
// "O sal se dissolve facilmente na água e reduz seu ponto de congelamento. Pura (sem sal), a água congela a cerca de 0 ºC. Já a água com sal precisa de uma temperatura menor, que pode chegar a dezenas de graus abaixo de zero. Quando o sal é colocado no gelo, parte dos cubos derretem, “roubando” calor durante a troca de estado físico (de sólido para líquido) e esfriando a mistura como um todo. Além disso, o sal dissolvido provoca uma reação que reduz ainda mais a temperatura da mistura."
// Você foi contratado pela Ambev para desenvolver o software (programa) do novo isopor inteligente da empresa. Esse isopor adiciona sal no gelo assim que é fechado e um temporizador é acionado. Esse temporizado mostra quanto tempo falta para que a cerveja esteja gelada, que é de aproximadamente 10 minutos.

// A entrada do seu programa é composta por uma variável:
// tempoTemporizador: variável do tipo number que armazena quantos minutos se passaram desde que o sal foi adicionado no isopor.

// Seu programa deve RETORNAR quanto tempo falta, em minutos, para a cerveja ficar gelada.



// ##Código
'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'solucao' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER tempoTemporizador as parameter.
 */

function solucao(tempoTemporizador: number): number {
    const tempoTotal: number = 10;
    const tempoRestante: number = tempoTotal - tempoTemporizador;
    console.log(tempoRestante)
    return tempoRestante;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const x1: number = parseInt(readLine().trim(), 10);

    const resultado: number = solucao(x1);

    ws.write(resultado + '\n');

    ws.end();
}
