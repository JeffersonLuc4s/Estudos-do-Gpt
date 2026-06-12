//EX1 Fácil
//Crie um array contendo: HTML CSS JAVASCRIPT Depois exiba o item "CSS" no console.
const linguagens = ["HTML", "CSS", "JavaScript"]
console.log(linguagens[1])

//EX2 Médio
//Crie um array contendo 5 números. Exiba no console:primeiro elemento e o último elemento
const numeros = [1, 2, 3, 4, 5]
console.log(numeros[0], numeros[4])

//EX3 Difícil
//Utilize um for para exibir todos os jogos no console.
const jogos = ["League of legends", "Path of Exile 2", "Valorant", "Minecraft"]
for (let j = 0; j < jogos.length; j++) {
    console.log(jogos[j])
}

//CORREÇÕES
//EX2
console.log(numeros[0])
console.log(numeros[numeros.length - 1])
//Porque se amanhã o array tiver 100 elementos, o código continua funcionando.