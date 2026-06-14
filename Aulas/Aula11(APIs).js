//EX1 Fácil
const usuarios = [
    {
        name: "Jeff"
    },
    {
        name: "Ana"
    }
]
console.log(usuarios[1].name)
//EX2 Médio
for (let u = 0; u < usuarios.length; u++) {
    console.log(usuarios[u].name)
}
//EX3 Difícil
//Na primeira linha a variavel resposta está pegando os dados diretamente da API e na variavel usuarios esses dados estão sendo convertidos de json() para objeto e array em javascript