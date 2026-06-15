//Q1- find() procura um elemento especifico no array e o filter e vai filtrar esse elemento, um vai achar o outro vai separar
//Q2- Ele transforma um array antigo em outro array de acordo com as condições que fizemos nele, cria um array novo
//Q3- Ele transforma o codigo json() que pegamos do url da API em um objeto/array de javascript
//Q4- ele para de executar e começa a executar o catch
//Q5- 
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
const users = usuarios.map(function(nomes) {
    return nomes.nome
})
console.log(users)
//Q6- 
const numeros = [1, 2, 3, 4, 5, 6]
const num = numeros.filter(function(impares) {
    return impares % 2 === 1
})
console.log(num)