//Q1 - array só preciso buscar as posições, no objeto preciso buscar especificamente cada parametro alem de ser uma quantidade muito maior que um array
//Q2 - para adicionar os dados do objeto dentro do array
//Q3 - ela vai limpar e depois atualizar os dados e mostrar na tela
//Q4 - para substituir o resultado, se não ia apenas adicionar a mesma lista com a modificação
//Q5 - o indice serve pra mostrar qual a posição que aquele array está
//Q6 - splice serve pra remover do array de acordo com os paramestros que voce botar dentro do splice
//Q7 - vai clicar no botao remover que vai ativar a função remover que vai remover de acordo com o indice no splice e depois chamar a função atualizarLista()
//EX1 
const jogador = {
    nome: "kirito",
    level: 87
}
//EX2 
const jogadores = []
const jogador = {
    nome: "kirito",
    level: 87
}
jogadores.push(jogador)
//EX3
const jogadores = []
const jogador = {
    nome: "kirito",
    level: 87
}
jogadores.push(jogador)
jogadores.forEach(joga => {
    console.log(joga)
})