//EX1 Fácil
async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    console.log(usuarios[0].name)
}
buscarUsuarios()
//EX2 Médio
async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    usuarios.forEach(user => {
        console.log(user.name)
    })
}
buscarUsuarios()
//EX3 Difícil
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    usuarios.forEach(user => {
        lista.innerHTML = `<div>${user.name}</div>`
    })
}
buscarUsuarios()