//EX1 Fácil
const botao = document.getElementById("botao")
botao.addEventListener("click", function() {
    console.log("Olá Mundo")
})
//EX2 Médio
const titulo = document.getElementById("titulo")
const botao = document.getElementById("botao")
botao.addEventListener("click", function() {
    titulo.textContent = "Online"
})
//EX3 Difícil
const status = document.getElementById("status")
const botao = document.getElementById("entrar")
botao.addEventListener("click", function() {
    status.textContent = "Conectado"
    status.style.color = "green"
})