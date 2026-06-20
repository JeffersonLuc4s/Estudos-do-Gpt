async function peganobreu() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users")

    const pega = await resposta.json()

    console.log(pega)
}
peganobreu()