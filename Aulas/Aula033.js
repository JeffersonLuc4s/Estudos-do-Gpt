//EX1 Fácil
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript",
    "Treinar Git"
]
tarefas.forEach((tarefa, indice) => {
    console.log(indice)
})
//EX2 Médio
tarefas.forEach((tarefa, indice) => {
    console.log(`${indice} - ${tarefa}`)
})
//EX3 Difícil
const usuarios = [
    "Jeff",
    "Ana",
    "Carlos"
]
usuarios.forEach((usuario, indice) => {
    console.log(`Usuário ${indice}: ${usuario}`)
})