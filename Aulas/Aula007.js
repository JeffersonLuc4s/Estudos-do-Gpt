//EX1 Fácil
const nome = document.getElementById("nome")
const botao = document.getElementById("botao")
botao.addEventListener("click", function() {
    console.log(nome.value);
})
//EX2 Médio
const nome = document.getElementById("nome")
const botao = document.getElementById("botao")
const res = document.getElementById("mensagem")
botao.addEventListener("click", function() {
    if (nome.value === "") {
        res.textContent = "Nome obrigatório"
    }
})
//EX3 Difícil
const nome = document.getElementById("nome")
const botao = document.getElementById("botao")
const res = document.getElementById("mensagem")
botao.addEventListener("click", function() {
    if (nome.value === "") {
        res.textContent = "Nome obrigatório"
    } else {
        res.textContent = "Cadastro realizado com sucesso"
    }
})