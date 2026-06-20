//EX1 Fácil
const lista = document.getElementById("lista")

function atualizarLista() {
    lista.innerHTML = ""
}
//EX2 Médio
const lista = document.getElementById("lista")
const personagem = []
const personagens = {
    nome: "Jeff",
    classe: "ninja"
};
{
    nome: "junior",
    classe: "clerigo"
}

personagem.push(personagens)
personagem.forEach(perso => {
    lista.innerHTML += `<div>${perso}</div>`
})
//EX3 Difícil
const botao = document.getElementById("cadastrar")
const lista = document.getElementById("lista")
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")
const persongens = []

function atualizarLista() {
    lista.innerHTML = ""
}

botao.addEventListener("click", () => {
    const personagem = {
        nome: nome.value,
        classe: classe.value
    }
    personagens.push(personagem)
    atualizarLista()
    personagens.forEach(cada => {
        lista.innerHTML += `<div>nome: ${cada.nome} <br>classe: ${cada.classe}</div> `
    })
    atualizarLista()
})