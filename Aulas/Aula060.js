//EX1 Fácil
const personagens = []
function atualizarLista() {
    personagens.forEach(perso => {

    })
}
//EX2 Médio
const lista = document.getElementById("lista")
const personagens = []
function atualizarLista() {
    personagens.forEach(perso => {
        lista.innerHTML = `<div>nome: ${perso.nome} <br>${perso.classe}</div>`
    })
}
//EX3 Difícil
//porque eu poderia usar essa função em outra coisa