//EX1 Fácil
const personagem = {
    nome: "",
    classe: ""
}
//EX2 Médio
const botao = document.getElementById("cadastrar")
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")

botao.addEventListener("click", () => {
    const personagem = {
        nome: (nome.value),
        classe: (classe.value)
    }
})
//EX3 Difícil
const botao = document.getElementById("cadastrar")
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")

botao.addEventListener("click", () => {
    const personagem = {
        nome: (nome.value),
        classe: (classe.value)
    }
    console.log(personagem)
})