const leia = require('readline-sync');

let nome, idade, doacao;

nome = leia.question("Qual seu nome?");
idade = leia.questionInt("Qual sua idade?");
doacao = leia.keyInYN("É sua primeira vez doando sangue?");

if (idade < 18 || idade > 69) {
    console.log(`Olá ${nome}, você não pode doar sangue!`);
} else if (doacao && idade >= 60 && idade <= 69) {
    console.log(`Olá ${nome}, você não pode doar sangue!`);
} else {
    console.log(`Olá ${nome}, você está apto(a) para doar sangue!`);

}


