const leia = require('readline-sync');

let salarioBruto;
let adNoturno;
let horasextras;
let descontos;
let salarioLiq;

salarioBruto = leia.questionFloat("Digite seu salario bruto:  ");
adNoturno = leia.questionFloat("Digite o adicional noturno que você recebeu: ");
horasextras = leia.questionFloat("Digite o valor das horas extras recebida: ");
descontos = leia.questionFloat("Digite valor dos descontos:  ");

salarioLiq = salarioBruto + adNoturno + (horasextras * 5) - descontos;

console.log("Seu salário líquido esse mês é: " + salarioLiq);