//EX1 Fácil
const tarefas = []
function salvarTarefas() {

}
//EX2 Médio
const tarefas = []
function salvarTarefas() {
    const texto = JSON.stringify(tarefas)
}
//EX3 Difícil
const tarefas = []
function salvarTarefas() {
    const texto = JSON.stringify(tarefas)
    localStorage.setItem("tarefas", texto)
}