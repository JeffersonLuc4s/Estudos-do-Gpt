//EX1 Fácil
function salvarTarefas() {
    const texto = JSON.stringify(tarefas)
    localStorage.setItem("tarefas", texto)
}
//EX2 Médio
function carregarTarefas() {
    const texto = localStorage.getItem("tarefas")
    const dados = JSON.parse(texto)
}
//EX3 Difícil
//assim que carregar a página, tem que chamar o carregarTarefas()