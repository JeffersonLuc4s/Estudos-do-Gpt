//EX1 Fácil
const jogador = {
    nome: "Naruto",
    level: 99
}
console.log(jogador.nome)
//EX2 Médio
const jogadores = [
    {
        nome: "Naruto",
        level: 99
    },
    {
        nome: "Sasuke",
        level: 98
    }
]
console.log(jogadores[1].nome)
//EX3 Difícil
const usuarios = [
    {
        nome: "Jeff"
    },
    {
        nome: "Ana"
    },
    {
        nome: "Carlos"
    }
]
for (let u = 0; u < usuarios.length; u++) {
    console.log(usuarios[u].nome)
}