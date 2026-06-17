//EX1 Fácil
const tarefas = []
tarefas.push("Estudar JavaScript")
//EX2 Médio
const botao = document.getElementById("adicionar")
const tarefa = document.getElementById("tarefa")
botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
})
//EX3 Difícil
const botao = document.getElementById("adicionar")
const tarefa = document.getElementById("tarefa")
botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
})
console.log(tarefas)