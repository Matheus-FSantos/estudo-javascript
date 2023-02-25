const div = document.getElementById("container");
const divLista = document.getElementById("lista");
const nomeUser = document.getElementsByName("nomeUser");
const span = document.getElementsByTagName("span");

const lista = ["Carro", "Moto", "Avião", "Jato", "Carrinho de golf"];

div.innerHTML = "<h1>Olá mundo</h1>";
div.style.background = "red";

for(let i = 0; i < lista.length; i++){
    divLista.innerHTML += "<li>" + lista[i] + "</li>"
}

nomeUser[3].innerHTML = "Receba [3]"
span[0].innerHTML = "Testando"