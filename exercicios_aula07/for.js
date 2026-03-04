const leia = require('readline-sync');

let contadorPar = 0;
let contadorImpar = 0; 

for(let i = 1; i <= 10; i++ ){
    
    let numero = leia.questionInt("Digite um número: ");

    if(numero % 2 == 0){
       contadorPar = contadorPar +1;

    }else{
        contadorImpar = contadorImpar +1;

    }

}

console.log("Total de números pares:", contadorPar);
console.log("Total de números ímpares:", contadorImpar);

