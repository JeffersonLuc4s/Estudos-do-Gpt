//EX1 Fácil
const tarefas = [
    "Comprar pão",
    "Estudar JavaScript"
]
tarefas.forEach(tarefs => {
    console.log(tarefs)
})
//EX2 Médio
tarefas.forEach(tarefs => {
        lista.innerHTML += `<div>${tarefs}</div>`
})
//EX3 Difícil
    botao.addEventListener("click", () => {
    const tarefas = []
    tarefas.push(tarefa.value)
    tarefa.value = ""
    tarefas.forEach(tarefs => {
        lista.innerHTML += `<div>${tarefs}</div>`
    })
})
