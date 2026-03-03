const leia = require('readline-sync');

let numeroA, numeroB, numeroC;

numeroA = leia.questionInt("Digite o número A: ");
numeroB = leia.questionInt("Digite o número B: ");
numeroC = leia.questionInt("Digite o número C: ");

if (numeroA + numeroB > numeroC) {
    console.log("A Soma de A + B é maior do que o número C");
} else if (numeroA + numeroB < numeroC) {
    console.log("A Soma de A + B é menor do que o número C");
} else {
    console.log("A Soma de A + B é igual a C")
}








