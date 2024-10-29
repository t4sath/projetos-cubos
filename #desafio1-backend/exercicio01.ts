// ##Figuras geométricas

// ##Problema
// Você foi contratado por uma escola para desenvolver um programa que vai auxiliar os alunos a memorizarem as figuras geométricas que eles aprendem em sala, que são as seguintes:
// triângulo: figura geométrica com três lados;
// quadrilátero: figura geométrica com quatro lados;
// pentágono: figura geométrica com cinco lados;
// hexágono: figura geométrica com seis lados;
// heptágono: figura geométrica com sete lados.

// A entrada do seu programa será composta por uma variável chamada quatidadeLados, do tipo number, e que armazena a quantidade de lados da figura consultada.

// Seu programa deverá RETORNAR:
// TRIANGULO: caso a figura tenha três lados;
// QUADRILATERO: caso a figura tenha quatro lados;
// PENTAGONO: caso a figura tenha cinco lados;
// HEXAGONO: caso a figura tenha seis lados;
// HEPTAGONO: caso a figura tenha sete lados;



// ##Codigo
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
 * The function is expected to return a STRING.
 * The function accepts INTEGER quantidadeLados as parameter.
 */

function solucao(quantidadeLados: number): string {
    if (quantidadeLados == 3) {
        return 'TRIANGULO'
    }
    if (quantidadeLados == 4) {
        return 'QUADRILATERO'
    }
    if (quantidadeLados == 5) {
        return 'PENTAGONO'
    }
    if (quantidadeLados == 6) {
        return 'HEXAGONO'
    }
    if (quantidadeLados == 7) {
        return 'HEPTAGONO'
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const x1: number = parseInt(readLine().trim(), 10);

    const resultado: string = solucao(x1);

    ws.write(resultado + '\n');

    ws.end();
}
