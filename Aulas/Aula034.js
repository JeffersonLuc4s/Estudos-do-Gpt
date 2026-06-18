//EX1 Fácil
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript",
    "Treinar Git"
]
function remover(indice) {
    tarefas.splice(indice, 1)
}
//EX2 Médio
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript",
    "Treinar Git"
]
remover(0)
console.log(tarefas)
//EX3 Difícil
const usuarios = [
    "Jeff",
    "Ana",
    "Carlos"
]
function removerUsuario(indice) {
    usuarios.splice(indice, 1)
}
removerUsuario(1)
console.log(usuarios)