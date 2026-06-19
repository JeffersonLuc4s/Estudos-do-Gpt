//EX1 Fácil
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()

    console.log(usuarios.forEach(usuario))
}
//EX2 Médio
    const botao = document.getElementById("buscar")
    const lista = document.getElementById("lista")

    async function buscarUsuarios() {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

        const usuarios = await resposta.json()

        const primeiro = usuarios.find(usuario => {
            lista.innerHTML = `<div>${usuario}</div>`
        })
}

    botao.addEventListener("click", () => {
        buscarUsuarios()
})
//EX3 Difícil
    const botao = document.getElementById("buscar")
    const lista = document.getElementById("lista")

    async function buscarUsuarios() {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

        const usuarios = await resposta.json()

        usuarios.forEach(usuario => {
            lista.innerHTML += `<div>${usuario}</div>`
        })
}

    botao.addEventListener("click", () => {
        buscarUsuarios()
})