//EX1 Fácil
const tarefas = []
//EX2 Médio
botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
    console.log(tarefas)
})
//EX3 Difícil
botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
    lista.innerHTML = ""
    tarefas.forEach(tarefs => {
        lista.innerHTML = `<div>${tarefs}</div>`
    })
})