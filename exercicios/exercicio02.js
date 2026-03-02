const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let mediaFinal;

nota1 = leia.questionFloat("Digite sua nota 1:  ");
nota2 = leia.questionFloat("Digite sua nota 2:  ");
nota3 = leia.questionFloat("Digite sua nota 3:  ");
nota4 = leia.questionFloat("Digite sua nota 4:  ");

mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Sua média final é: " + mediaFinal);
