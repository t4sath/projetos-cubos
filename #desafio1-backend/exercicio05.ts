// ##Desconto para grandes compras 

// ##Problema
// A loja onde trabalha deseja incentivar o consumo dos clientes oferecendo descontos para compras que excedam um determinado valor. No entanto, a loja quer garantir que o desconto só seja aplicado quando o valor total dos produtos no carrinho for maior que um limite específico.
// O valor a ser pago pela compra é dado por:
// valor pago = valor compra - valor compra * desconto
// Você, como desenvolvedor contratado, está responsável por implementar tal funcionalidade.

// A entrada do seu programa será composta por três variáveis:
// precosCarrinho: array de números em que cada posição representa o preço de um item comprado pelo cliente que está no carrinho de compras;
// minimoParaDesconto: variável do tipo number que indica o valor mínimo da compra, dado pelo soma dos valores dos itens do carrinho, para que a pessoa tenha o desconto aplicado;
// desconto: variável do tipo number que indica o valor do desconto aplicado à compra.

// Você deve RETORNAR o valor a ser pago pelo cliente.



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
 * The function is expected to return a FLOAT.
 * The function accepts following parameters:
 *  1. FLOAT_ARRAY precosCarrinho
 *  2. FLOAT minimoParaDesconto
 *  3. FLOAT desconto
 */

function solucao(precosCarrinho: number[], minimoParaDesconto: number, desconto: number): number {
     const valorCompra: number = precosCarrinho.reduce((total, preco) => total + preco, 0);

    if (valorCompra > minimoParaDesconto) {
        return valorCompra - valorCompra * desconto;
    } else {
        return valorCompra;
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const x1Count: number = parseInt(readLine().trim(), 10);

    const x1: number[] = readLine().replace(/\s+$/g, '').split(' ').map(x1Temp => parseFloat(x1Temp));

    const x2: number = parseFloat(readLine().trim());

    const x3: number = parseFloat(readLine().trim());

    const resultado: number = solucao(x1, x2, x3);

    ws.write(resultado + '\n');

    ws.end();
}


