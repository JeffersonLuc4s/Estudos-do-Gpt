//EX1 Fácil
const personagens = []
function remover(indice) {
    personagens.splice(indice, 1)
}
//EX2 Médio
const lista = document.getElementById("lista")
const personagens = []
function atualizarLista() {
    lista.innerHTML = ""
    personagens.forEach((perso, index) => {
        lista.innerHTML = `<div>Nome: ${perso.nome}<br>Classe: ${perso.classe}</div>`
    })
}

function remover(indice) {
    personagens.splice(indice, 1)
    atualizarLista()
}
//EX3 Difícil
//iamos remover o personagem mas na tela não ia mudar nada o personagem ia continuar lá
