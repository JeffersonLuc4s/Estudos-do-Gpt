//EX1 Fácil
//Crie um objeto chamado carro contendo: marca modelo ano, depois exiba a marca no console
const carro = {
    marca: "fiat",
    modelo: "sedan",
    ano: 2024
}
console.log(carro.marca)

//EX2 Médio
//Crie um objeto chamado personagem contendo: nome classe level, exiba o level no console e depois altere o level para outro valor e exiba novamente
let personagem = {
    nome: "naruto",
    classe: "ninja",
    level: 97
}
console.log(personagem.level)
personagem.level = 99
console.log(personagem.level)

//EX3
const produto = {
    nome: "Teclado",
    preco: 150,
    estoque: 20
}
console.log("Produto: " + produto.nome)
console.log("Preço: " + produto.preco)
console.log("Estoque: " + produto.estoque)

//Observação
//EX2 eu botei let porem poderia ter feito com o const já que eu mudei apenas uma propriedade dele e não o objeto inteiro

//EX3
//Como um desenvolvedor moderno escreveria:
console.log(`Produto: ${produto.nome}`)
console.log(`Preço: ${produto.preco}`)
console.log(`Estoque: ${produto.estoque}`)