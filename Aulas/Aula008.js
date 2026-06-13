//EX1 Fácil
const res = document.getElementById("resultado")
res.innerHTML = "<h1>Olá Mundo</h1>"
//EX2 Médio
const list = document.getElementById("lista")
const nomes = ["Jeff", "Ana"]
list.innerHTML = "<p>nomes[0]</p>"
list.innerHTML = "<p>nomes[1]</p>"
//EX3 Difícil
const jogos = [
    "League of Legends",
    "Path of Exile 2",
    "Valorant"
]
const lista = document.getElementById("lista")
for (let j = 0; j < jogos.value; j++) {
    lista.innerHTML = "jogos[j]"
}
//reforço
//EX-A
const nome = "Jeff"
console.log(`Olá ${nome}`)
//EX-B
const numeros = [10, 20, 30]
console.log(numeros.length)
//EX-C
const lista = document.getElementById("lista")
lista.innerHTML = `<p>Teste<p>
<p>Teste 2</p>`