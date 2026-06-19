//EX1 Fácil
const usuario = {
    name: "Jeff",
    email: "jeff@gmail.com"
}
console.log(usuario.name)
//EX2 Médio
const usuarios = [
    {
        name: "Jeff"
    },
    {
        name: "Ana"
    }
]
console.log(usuarios[1].name)
//EX3 Difícil
const usuarios = [
    {
        name: "Jeff"
    },
    {
        name: "Ana"
    },
    {
        name: "Carlos"
    }
]
usuarios.forEach((usuario) => {
    console.log(usuario.name)
})

//Minha duvida na aula 49 foi por exemplo nesse EX2 Médio eu sei o que tem dentro do objeto, tem name:jeff mas quando eu pego os dados da API não aparece pra mim o que tem dentro dela pra eu poder expecificar o "blabla".name, como eu vou saber que tem um objeto chamado name lá dentro? é isso que eu quero saber