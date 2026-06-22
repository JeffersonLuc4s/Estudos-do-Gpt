//EX1 Fácil
const lista = document.getElementById("lista")
const personagens = []
function atualizarLista() {
    lista.innerHTML = ""
    personagens.forEach((perso, index) => {
        lista.innerHTML += `<div>Nome: ${perso.nome}<br>Classe: ${perso.classe}<button>Remover</button></div>`
    })
}

function remover(indice) {
    personagens.splice(indice, 1)
    atualizarLista()
}
//EX2 Médio
const lista = document.getElementById("lista")
const personagens = []
function atualizarLista() {
    lista.innerHTML = ""
    personagens.forEach((perso, index) => {
        lista.innerHTML += `<div>Nome: ${perso.nome}<br>Classe: ${perso.classe}<button onclick="remover(${index})">Remover</button></div>`
    })
}

function remover(indice) {
    personagens.splice(indice, 1)
    atualizarLista()
}
//EX3 Difícil
//o botão sabe porque o indice ta mostrando o numero dele e ativando o parametro da função remover