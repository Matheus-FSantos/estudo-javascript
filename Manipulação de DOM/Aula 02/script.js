function getNome(){
    return pessoa.nome;
}

function getIdade(){
    return pessoa.idade;
}

function getLocalizacao(){
    return pessoa.localizacao;
}

function getProfissao(){
    return pessoa.profissao;
}

let pessoa = {
    nome: "Matheus",
    idade: 18,
    localizacao: "São Paulo",
    profissao: "Programador"
};

console.log(getNome() + " " + getIdade() + " " + getLocalizacao() + " " + getProfissao());