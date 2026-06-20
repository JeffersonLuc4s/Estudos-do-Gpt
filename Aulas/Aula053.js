//EX1 Fácil
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    lista.innerHTML = ""
}
//EX2 Médio
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    usuarios.forEach(usuario => {
        lista.innerHTML += `<div>nome: ${usuario.name}</div>`
    })
}
//EX3 Difícil
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    usuarios.forEach(usuario => {
        lista.innerHTML += `<div>${usuario.name} <br>${usuario.email}</div>`
    })
}
