// # Contador de vogais

// ## Problema
// Você está desenvolvendo a funcionalidade de um programa responsável por detectar um possível erro na escrita de uma palavra. Para isso, sabe-se que TODA palavra da língua portuguesa precisa de pelo menos uma vogal.
// Você deve **RETORNAR**:
// - `true`: caso a palavra tenha pelo menos uma vogal
// - `false`: caso a palavra não tenha nenhuma vogal (possível erro)

// ##Código
function solucao(palavra: string): boolean {
  const palavra1 = "jkknmmnlpppwew"

  const vogais = new Set(['a', 'e', 'i', 'o', 'u'])

  for (const letra of palavra) {
    if (vogais.has(letra)) {
        return true;
    }
}
  return false

  console.log(solucao(palavra1))
}

export default solucao;