##Pontuação no ENEM

##Problema
Você foi contratado pelo MEC para trabalhar no SiSU (Sistema de Seleção Unificada), sistema do governo usado para que os alunos que fizeram o ENEM possam submetê-los às suas candidaturas para vagas em universidades pelo Brasil.
Você é responsável por desenvolver a funcionalidade do sistema que calcula a soma das notas do candidato.
Você deve RETORNAR a soma das notas do candidato.


##Código

function solucao(linguagens, humanas, natureza, matematica) {
    const linguagens = 600
    const humanas = 800
    const natureza = 800
    const matematica = 400
     const somaNota = linguagens + humanas + natureza + matematica
    
    console.log(somaNota)
    return somaNota
  }
  
  module.exports = solucao