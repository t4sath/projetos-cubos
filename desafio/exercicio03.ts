##Donkey Kong

##Problema
Donkey Kong é uma série de jogos eletrônicos da Nintendo que gira em torno do personagem Donkey Kong. O personagem fez sua primeira aparição no jogo de fliperama de 1981 intitulado Donkey Kong, no qual seria Jumpman (Mario) que posteriormente viria a estrelar o primeiro título de sua franquia nos consoles (vídeo game) da empresa, Super Mario Bros.
Em um dos jogos da franquia, para ganhar prêmios deve-se conseguir acertar uma série de três roletas e conseguir tirar o mesmo símbolo nas três.
Você foi contratado pela Nintendo para ajudar na produção do novo jogo da franquia, e será responsável por implementar a lógica dos prêmios, que seguirá o mesmo mecanismo descrito anteriormente.

A entrada do seu programa será composta por três variáveis:
simbolo1: variável do tipo string que indica o símbolo tirado na primeira roleta;
simbolo2: variável do tipo string que indica o símbolo tirado na segunda roleta;
simbolo3: variável do tipo string que indica o símbolo tirado na terceira roleta;

Seu programa deve RETORNAR :
GANHOU: se os três símbolos forem iguais;
PERDEU: se tiver pelo menos um símbolo diferente.


##Código:
function solucao(simbolo1: string, simbolo2: string, simbolo3: string): string {
	if (simbolo1 === simbolo2 && simbolo2 === simbolo3) {
        return 'GANHOU';
    } else {
        return 'PERDEU';
    }
}