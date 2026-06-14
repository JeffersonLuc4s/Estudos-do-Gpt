//EX1 Fácil
const usuarios = [
    {
        name: "Jeff"
    }
]
const lista = document.getElementById("lista")
lista.innerHTML = `<p>${usuarios[0].name}</p>`
//EX2 Médio
const usuarios = [
    {
        name: "Jeff"
    },
    {
        name: "Ana"
    }
]
const lista = document.getElementById("lista")
lista.innerHTML = `<p>${usuarios[0].name}</p>
<p>${usuarios[1].name}</p>`
//EX3
const usuarios = [
    {
        name: "Jeff"
    },
    {
        name: "Ana"
    },
    {
        name: "Carlos"
    }
]
const lista = document.getElementById("lista")
for (u = 0; u < usuarios.length; u++) {
    lista.innerHTML += `<div>${usuarios[u].name}</div>`
}