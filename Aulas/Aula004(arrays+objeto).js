//EX1 Fácil
//Exiba no console apenas: Matrix
const filmes = [
    {
        nome: "Matrix",
        ano: 1999
    },
    {
        nome: "Interestelar",
        ano: 2014
    }
]
console.log(filmes[0].nome)

//EX2 Médio
//Utilizando o mesmo array acima, exiba: Interestelar 2014
console.log(filmes[1].nome)
console.log(filmes[1].ano)

//EX3 Difícil
//Utilize um for para exibir os nomes dos jogos
const jogos = [
    {
        nome: "League of Legends",
        jogadores: 5
    },
    {
        nome: "Path of Exile 2",
        jogadores: 1
    },
    {
        nome: "Valorant",
        jogadores: 5
    }
]
for (let j = 0; j < jogos.length; j++) {
    console.log(jogos[j].nome)
}