##Balança desbalanceada

##Problema
Você está desenvolvendo o programa que será colocado em uma balança eletrônica. Essa balança funciona da seguinte maneira:
Ela possui dois pratos. Em um deles você coloca o que está querendo pesar e no outro a balança vai adicionando pesos até que entre em equilíbrio (os pratos estejam na mesma altura), conforme a imagem abaixo.
Saiba-se que por um erro na fabricação do prato onde a balança coloca os pesos de forma controlada pesa 0,15 kg a mais que o outro.
Seu programa deve devolver o peso do objeto com base na quantidade de peso colocada pela balança até que o equilíbrio seja atingido.
Você deve RETORNAR o peso, em quilograma, do objeto pesado.


##Código

function solucao(pesoAdicionado) {
    let pesoAdicionado = 15
    const pesoExtra = 0.15
     const pesoObjeto = pesoAdicionado + pesoExtra
  
    console.log(pesoObjeto)
    return pesoObjeto
  }
  
  module.exports = solucao;
  
