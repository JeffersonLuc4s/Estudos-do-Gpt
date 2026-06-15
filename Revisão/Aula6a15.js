//Q1- A função do addEventListener() é adicionar o evento que vamos especificar como ele vai ser ativado e o que ele vai fazer
//Q2- textContent adiciona um texto atraves do DOM e o innerHTML gera tags mais complexas atraves do DOM
//Q3- Atraves de um submit, vai passar tudo que foi digitado no input atraves de um submit de formulario
//Q4- JSON é um texto que é convertido para javascript, quando ele é convertido ele vira arrays ou objetos javascript
//Q5- fetch() serve para acessar o URL da API
//Q6- ele só funciona em casos de API depois que a pasta está com um async e botamos ele primeiro em toda variavel dentro do async, mas o que ele faz eu ainda não entendi(porfavor explique o await e o async)
//Q7- try é como se fosse um if porem no caso de APIs pois se falhar a requisição dele, cancela tudo e ai fazem a requisição do catch que seria o else
//Q8- forEach() esqueci já o map() transforma o array antigo em um novo array com as condições que botamos nele
//Q9- find() ele vai achar o primeiro elemento que passar na condição já o filter vai passar todos os outros elemento que passar na condição imposta
//Q10- no formato JSON()
//EX1
const botao = document.getElementById("entrar")
botao.addEventListener("click", function() {
    console.log("Bem-vindo")
})
//EX2
const msn = document.getElementById("mensagem")
msn.textContent = "Login realizado"
//EX3
const numeros = [5, 10, 15]
numeros.forEach(function(num) {
    console.log(num)
})
//EX4
const usuarios = [
    { nome: "Jeff" },
    { nome: "Ana" }
]
const users = usuarios.map(function(name) {
    return name.nome
})
console.log(users)
//EX5
const numeros = [1, 2, 3, 4, 5, 6]
const num = numeros.filter(function(pares) {
    return pares % 2 === 0
})
console.log(num)
//EX6
const jogadores = [
    { nome: "Naruto" },
    { nome: "Sasuke" }
]
const sas = jogadores.find(function(name) {
    return name.nome === "Sasuke"
})
console.log(sas)
//EX7
buscarDados() {

}
//EX8 o fetch pega o URL e nos mostra o JSON depois convertemos o JSON em objeto javascript e inserimos esse objeto no DOM
//Autoavaliação
//1- Sinto mais confiança no addEventListener pois eu já estudei antes ele
//2- o que eu sinto menos confiança é APIs e os find, filter, forEach só o map que eu entendi melhor até agora desses
