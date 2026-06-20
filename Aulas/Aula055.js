//Q1 - Uma API é um banco de dados onde podemos extrair essas informações
//Q2 - função do fetch() é extrair os dados da API que selecionamos, esses dados vem no formato json()
//Q3 - await serve para esperar o fetch puxar todas as informações da API, pois se não usar ele o javascript não vai esperar e vai executar as outras sequencias
//Q4 - um pega as informações e o outro converte as informações para javascript
//Q5 - para quando a requisição da API não funcionar podemos ter um plano B
//Q6 - usuario.email
//Q7 - um substitui e o outro adiciona
//Q8 - clicou no botão ativou o evento buscarUsuarios() nele o fetch() vai pegar os dados em json depois vai converter os dados em javascript e mostrar no innerHTML o resultado
//EX1 
async function buscarJogos() {

}
//EX2 
async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const usuarios = await resposta.json()
}
//EX3 
jogos.forEach(jogo => {
    console.log(jogo.titulo)
})