const leia = require('readline-sync');

let numeros = [];
let soma = 0;

for (let i = 0; i < 10; i++) {

    let numero = leia.questionInt(`Digite o número ${i + 1}: `);
    numeros.push(numero);

}

for (let i = 0; i < numeros.length; i++) {

    if (i % 2 !== 0) {
        console.log(numeros[i]);
    }

    soma = soma + numeros[i];
}

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }

}

let media = soma / numeros.length;

console.log("\nSoma de todos os elementos:", soma);
console.log("Média de todos os elementos:", media);
