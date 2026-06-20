//EX1 Fácil
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")
const botao = document.getElementById("cadastrar")
const lista = document.getElementById("lista")
//EX2 Médio
const personagens = []
//EX3 Difícil
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")
const botao = document.getElementById("cadastrar")
const lista = document.getElementById("lista")

botao.addEventListener("click", () => {
    console.log(nome.value)
    console.log(classe.value)
})