//EX1 Fácil
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")
const botao = document.getElementById("adicionar")
const personagens = []
botao.addEventListener("click", () => {
    const personagem = {
        nome: nome.value,
        classe: classe.value
    }
    personagens.push(personagem)
})
//EX2 Médio
const nome = document.getElementById("nome")
const classe = document.getElementById("classe")
const botao = document.getElementById("adicionar")
const personagens = []
botao.addEventListener("click", () => {
    const personagem = {
        nome: nome.value,
        classe: classe.value
    }
    personagens.push(personagem)
    nome.value = ""
    classe.value = ""
})
//EX3 Difícil
//o usuario digita o nome e a classe, acionar o botão que aciona o evento click e nesse evento adicionamos o nome e a classe que o usuario digitou no array personagens, e depois adicionamos no html 