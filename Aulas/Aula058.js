//EX1 Fácil
const personagens = []
//EX2 Médio
const personagens = []
const botao = document.getElementById("cadastrar")
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")

botao.addEventListener("click", () => {
    const personagem = {
        nome: "jeff",
        classe: "ninja"
    }
    personagens.push(personagem)
})
//EX3 Difícil
const personagens = []
const personagem = {
        nome: "jeff",
        classe: "ninja"
    }
personagens.push(personagem)
console.log(personagens)