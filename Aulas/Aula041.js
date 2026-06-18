//EX1 Fácil
const tarefa = document.getElementById("tarefa")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")
const tarefas = []
function atualizarLista() {
    lista.innerHTML = ""
    tarefas.forEach(tarefs => {
        lista.innerHTML += `<div>${tarefs}</div>`
    })
}
function remover(indice) {
    tarefas.splice(indice, 1)
    atualizarLista()
}
botao.addEventListener("click", () => {
    console.log(tarefa.value)
})
//EX2 Médio
const tarefa = document.getElementById("tarefa")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")
const tarefas = []
function atualizarLista() {
    lista.innerHTML = ""
    tarefas.forEach(tarefs => {
        lista.innerHTML += `<div>${tarefs}</div>`
    })
}
function remover(indice) {
    tarefas.splice(indice, 1)
    atualizarLista()
}
botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
})
//EX3 Difícil
const tarefa = document.getElementById("tarefa")
const botao = document.getElementById("botao")
const lista = document.getElementById("lista")
const tarefas = []
function atualizarLista() {
    lista.innerHTML = ""
    tarefas.forEach(tarefs => {
        lista.innerHTML += `<div>${tarefs}</div>`
    })
}
function remover(indice) {
    tarefas.splice(indice, 1)
    atualizarLista()
}
botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
    tarefa.value = ""
    atualizarLista()
})