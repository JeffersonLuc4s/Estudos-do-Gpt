//EX1 Fácil
const numeros = [1, 2, 3]
const triplo = numeros.map(function(tri){
    return tri * 3
})
console.log(triplo)
//EX2 Médio
const jogos = [
    {
        nome: "LoL"
    },
    {
        nome: "PoE 2"
    }
]
const nomes = jogos.map(function(name){
    return name.nome
})
console.log(nomes)
//EX3 Difícil
const precos = [10, 20, 30]
const cinco = precos.map(function(soma) {
    return soma + 5
})
console.log(cinco)