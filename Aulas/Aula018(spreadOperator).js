//EX1 Fácil
const numeros = [1, 2, 3]
const copia = [...numeros]
console.log(copia)
//EX2 Médio
const jogos = ["LoL", "PoE 2"]
const vala = [...jogos, "Valorant"]
console.log(vala)
//EX3 Difícil
const usuario = {
    nome: "Jeff"
}
const idade = {...usuario, idade: 25}
console.log(idade)