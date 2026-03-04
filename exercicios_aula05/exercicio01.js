const leia = require('readline-sync');
// variaveis 
let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("Digite seu salario:  ");
abono = leia.questionFloat("Digite o abono: ");

novoSalario = salario + abono;

console.log("O novo salario é: " + novoSalario);
