//EX1 Fácil
function carregarTarefas() {

}
//EX2 Médio
function carregarTarefas() {
    const texto = localStorage.getItem("tarefas")
}
//EX3 Difícil
function carregarTarefas() {
    const texto = localStorage.getItem("tarefas")
    const dados = JSON.parse(texto)
}