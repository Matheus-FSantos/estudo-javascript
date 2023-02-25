let nome = prompt("Digite seu nome");

while(nome === ""){
    nome = prompt("Digite seu nome")    
}

const status = confirm("Deseja confirmar a ação?");

if(status)
    alert("Nome informado: " + nome);
else{
    alert("Cancelado");
    nome = null;
    console.log(nome)
}