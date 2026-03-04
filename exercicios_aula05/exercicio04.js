const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;
let produto1;
let produto2;
let diferenca;

n1 = leia.questionInt("Digite número 1:  ");
n2 = leia.questionInt("Digite número 2:  ");
n3 = leia.questionInt("Digite número 3:  ");
n4 = leia.questionInt("Digite número 4:  ");

produto1 = n1 * n2;
produto2 = n3 * n4;

diferenca = produto1 - produto2;

console.log("Diferença: " + diferenca);







