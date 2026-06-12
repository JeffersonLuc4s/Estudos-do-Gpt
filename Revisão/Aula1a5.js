//Ex1
for (n = 5; n <= 15; n++) {
    console.log(n)
}
//Ex2
const animes = ["Naruto", "HxH", "Bleach", "FMA"]
console.log(animes[2])
//Ex3
const jogo = {
    nome: "Aion2",
    genero: "MMORPG",
    ano: 2026
}
console.log(jogo.genero)
//Ex4
const personagens = [{
    nome: "naruto",
    classe: "ninja"
}, {
    nome: "yasuo",
    classe: "samurai"
}]
console.log(personagens[1].nome)
//Ex5
const login = document.getElementById("mensagem")
login.textContent = "Login realizado"