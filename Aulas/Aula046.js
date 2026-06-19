//EX1 - Fácil
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const usuarios = await fetch("https://jsonplaceholder.typicode.com/users")
}

botao.addEventListener("click", () => {
    buscarUsuarios()
})
//EX2 Médio
const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")

async function buscarUsuarios() {
    const usuarios = await fetch("https://jsonplaceholder.typicode.com/users")

    const resposta = await usuarios.json()
}

botao.addEventListener("click", () => {
    buscarUsuarios()
})
//EX3 Difícil
//usuarios são os dados da API e a resposta são esses dados convertidos em array js