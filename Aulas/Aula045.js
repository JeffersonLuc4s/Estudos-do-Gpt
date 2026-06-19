//EX1 Fácil
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")
//EX2 Médio
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")
botao.addEventListener("click", () => {
    console.log("clicou!")
})
//EX3 Difícil
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")

function buscarUsuarios() {
    console.log("funciona")
}

botao.addEventListener("click", () => {
    buscarUsuarios()
})