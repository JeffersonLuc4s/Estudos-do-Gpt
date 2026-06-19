    const tarefa = document.getElementById("tarefa")
    const botao = document.getElementById("adicionar")
    const lista = document.getElementById("lista")
    const tarefas = []

    botao.addEventListener("click", () => {
        tarefas.push(tarefa.value)
        tarefa.value = ""
        limparLista()
    })

    function remover(indice) {
        tarefas.splice(indice, 1)
        limparLista()
    }

    function limparLista() {
    lista.innerHTML = ""
    tarefas.forEach((tarefs, index) => {
        lista.innerHTML += `<div>${tarefs}
            <button onclick="remover(${index})">remover</button></div>`
    })
}