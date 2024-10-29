function criptografarSenha(senha: string): string {
    const senhaInvertida = senha.split('').reverse().join('');
    const senhaCriptografada = `zz${senhaInvertida}yy`;
    console.log("Senha criptografada:", senhaCriptografada);
    return senhaCriptografada;
}

export default criptografarSenha;
