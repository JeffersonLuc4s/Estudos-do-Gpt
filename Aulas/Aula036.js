//EX1 Fácil
const indice = 0
const lista = document.getElementById("lista")
lista.innerHTML = `<button onclick="remover(indice)">
    Remover
</button>`
//EX2 Médio
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript"
]
tarefas.forEach((tarefa, indice) => {
    lista.innerHTML = `<div>${indice} - ${tarefa}<button onclick="remover(indice)">
    Remover
</button></div>`
})
//EX3 Difícil
function remover(indice) {

}
console.log(indice)
