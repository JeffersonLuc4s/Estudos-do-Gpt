const usuarios = [
    {
        nome: "Jeff",
        level: 99
    },
    {
        nome: "Ana",
        level: 75
    },
    {
        nome: "Carlos",
        level: 50
    }
]
const lista = document.getElementById("lista")
usuarios.forEach(nomes => {
    lista.innerHTML += `<div>${nomes.nome} - level ${nomes.level}</div>`
}) 