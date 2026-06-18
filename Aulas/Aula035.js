//EX1 Fácil
const tarefa = "Comprar pão"
const lista = document.getElementById("lista")
lista.innerHTML = `<div>${tarefa}<button>Remover</button></div>`
//EX2 Médio
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript"
]
tarefas.forEach(tarefa => {
    lista.innerHTML = `<div>${tarefa}<button>Remover</button></div>`
})
//EX3 Difícil
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript"
]
tarefas.forEach((tarefa, indice) => {
    lista.innerHTML = `<div>${indice} - ${tarefa}<button>Remover</button></div>`
})