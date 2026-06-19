//EX1 Fácil
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")

async function buscarUsuarios() {

}
//EX2 Médio
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")
}
//EX3 Difícil
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    console.log(usuarios)
}