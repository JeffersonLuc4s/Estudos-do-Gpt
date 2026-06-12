//EX1 Fácil
//Crie um loop que exiba: 1 2 3 4 5
for (let n = 1; n <= 5; n++) {
   console.log(n);
}

//EX2 Médio
// Crie um loop que exiba: 10 9 8 7 6 5 4 3 2 1
for (let i = 10; i >= 1; i--) {
   console.log(i)
}

//EX3 Difícil
//Crie um loop que exiba apenas os números pares de 0 até 20.
for (let p = 0; p <= 20; p++) {
   if (p % 2) {
      
   } else {
      console.log(p)
   }
}

//CORREÇÃO
//EX3
for (let p = 0; p <= 20; p++) {
   if (p % 2 === 0) {
      console.log(p);
   }
}
//VERSÃO 2(mais eficiente)
for (let p = 0; p <= 20; p += 2) {
   console.log(p);
}
//Já pula direto para o próximo número par.