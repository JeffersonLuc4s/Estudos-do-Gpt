//Q1- arrow function é outra forma de declarar uma função com menos codigo
//Q2- Uma é a função normal e a outra é uma arrow function
//Q3- não lembro
//Q4- uma é sobre objeto e a outra é sobre array
//Q5- ele copia e cria um outro array ou objeto, alem de conseguirmos adicionar mais alguns atributos enquanto isso
//Q6- separa 1 elemento dentro do array ou objeto do resto dos elementos
//Q7- spread copia e cria rest é o resto dos elementos
//Q8- Não sei
//EX1 
const soma = (a, b) => a + b
//EX2
const usuario = {
    nome: "Jeff",
    idade: 25
}
const {nome, idade} = usuario
//EX3
const numeros = [1, 2, 3]
const num = [...numeros]
//EX4 não lembro
const jogos = [
    "LoL",
    "PoE 2",
    "Valorant"
]
const melhor = [primeiro, ...resto]
console.log(primeiro)
//EX5
const usuarios = [
    {
        nome: "Jeff"
    },
    {
        nome: "Ana"
    }
]
const user = usuarios.map(usuario => usuario.nome)
console.log(user)
//Autoavaliação
//1- Arrow function
//2- spread e rest