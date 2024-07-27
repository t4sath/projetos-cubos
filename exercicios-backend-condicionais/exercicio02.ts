// # Jogo de carta de batalha da Cubos

// ## Problema
// A Cubos Academy criou um simples jogo de batalha de cartas que funciona da seguinte forma:
// 1. Cada jogador possui uma carta monstro na mão, que mostra a força que aquele monstro possui;
// 2. Vence o jogo o jogador que possui o monstro mais forte;
// 3. Caso as forças sejam iguais, há um empate.
// Você deve criar um programa que implemente a lógica acima.

// Você deve RETORNAR:
// - `JOGADOR 1 GANHOU`: caso o jogador 1 tenha ganhado;
// - `JOGADOR 2 GANHOU`: caso o jogador 2 tenha ganhado;
// - `EMPATE`: caso o jogo tenha terminado empatado.


// ##Código: 
export default function solucao(monstro1: number, monstro2: number): string {
  if (monstro1 > monstro2) {
    return 'Jogador 1 ganhou'
 } else if (monstro1 < monstro2) {
    return 'Jogador 2 ganhou'
 } else {
    return 'Empate'
 }

console.log(monstro1, monstro2)
}