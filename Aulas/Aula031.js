//EX1 Fácil
tarefa.value = ""
//EX2 Médio
    const tarefas = []
    botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
    tarefa.value = ""
})
//EX3 Difícil
    const tarefas = []
    botao.addEventListener("click", () => {
    tarefas.push(tarefa.value)
    tarefa.value = ""
    lista.innerHTML = ""
    tarefas.forEach(tarefs => {
        lista.innerHTML += `<div>${tarefs}</div>`
    })
})