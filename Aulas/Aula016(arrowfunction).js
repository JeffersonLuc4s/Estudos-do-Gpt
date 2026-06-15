//EX1 Fácil
const dobro = (numero => numero * 2)
//EX2 Médio
const numeros = [1, 2, 3]
const num = numeros.map(dobro => dobro * 2)
//EX3 Difícil
const numeros = [1, 2, 3, 4, 5, 6]
const num = numeros.filter(pares => pares % 2 === 0)