//EX1 Fácil
const animes = [
    "Naruto",
    "Bleach",
    "One Piece"
]
animes.forEach(function(chars){
    console.log(chars)
})
//EX2 Médio
const jogadores = [
    {
        nome: "Jeff"
    },
    {
        nome: "Ana"
    }
]
const jogador = jogadores.find(function(player){
    return player.nome === "Ana"
})
console.log(jogador)
//EX3 Difícil
const numeros = [1, 2, 3, 4, 5, 6]
const par = numeros.filter(function(pares) {
    return pares % 2 === 0
})
console.log(par)