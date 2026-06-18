//EX1 Fácil
function atualizarLista() {
    lista.innerHTML = ""
}
//EX2 Médio
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript",
    "Treinar Git"
]
function atualizarLista() {
    lista.innerHTML = ""
    tarefas.forEach(tarefa => {
        lista.innerHTML += `${tarefa}`
    })
}
//EX3 Difícil
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript",
    "Treinar Git"
]
const indice = 0
function atualizarLista() {
    lista.innerHTML = ""
    tarefas.forEach(tarefa => {
        lista.innerHTML += `${tarefa}`
    })
}
tarefas.splice(indice, 1)
atualizarLista()
