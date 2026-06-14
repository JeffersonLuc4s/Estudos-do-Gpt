const botao = document.getElementById("buscar")
const lista = document.getElementById("lista")
botao.addEventListener("click", async function () {
    try {
        const resultado = await fetch("https://jsonplaceholder.typicode.com/users")

        const api = await resultado.json()

        for (let u = 0; u < user.length; u++) {
            lista.innerHTML += `<div>${user[u].name}</div>`
        }
    } catch (erro) {
        lista.innerHTML = "<div>Erro ao carregar usuários</div>"
    }
})