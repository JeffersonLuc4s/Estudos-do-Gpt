//EX1 Fácil
async function buscarAlgo() {
    try {
        
    } catch {

    }
}
//EX2 Médio
async function buscarAlgo() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

        const usuarios = await resposta.json()
        
        console.log(usuarios)
    } catch {

    }
}
//EX3 Difícil
const lista = document.getElementById("lista")

async function buscarAlgo() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

        const usuarios = await resposta.json()

        console.log(usuarios)
    } catch {
        lista.innerHTML = `<div>Falha ao carregar os usuários.</div>`
    }
}