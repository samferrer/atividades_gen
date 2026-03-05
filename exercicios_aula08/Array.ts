import readlinesync = require("readline-sync");

const cores = new Array<string>(5);

for(let i = 0; i < cores.length; i++){
  cores[i] = readlinesync.question("Escreva uma cor: ");
}

console.log("Cores digitadas: ");

for (let cor of cores){
    console.log(cor);
}

console.log("Cores ordenadas: ");
cores.sort();

for (let cor of cores){
    console.log(cor);

}
