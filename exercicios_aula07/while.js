const leia = require('readline-sync');

let contadorMenor21 = 0;
let contadorMaior50 = 0;

let idade = leia.questionInt("Digite uma idade: ");

while (idade >= 0) {

    if (idade < 21) {
        contadorMenor21 = contadorMenor21 + 1;
    }

    if (idade > 50) {
        contadorMaior50 = contadorMaior50 + 1;
    }

    idade = leia.questionInt("Digite uma idade: ");
}

console.log("Total de pessoas menores de 21 anos: ", contadorMenor21);
console.log("Total de pessoas maiores de 50 anos: ", contadorMaior50);