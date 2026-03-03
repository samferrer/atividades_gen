const leia = require('readline-sync');

let codigo, quantidade, nomeProduto, preco, total;

codigo = leia.questionInt("Digite o código do produto: ");
quantidade = leia.questionInt("Digite a quantidade: ");

switch(codigo){
   case 1: 
        nomeProduto = "Cachorro Quente"
        preco = 10.00
        
        break;
   case 2: 
        nomeProduto = "X-Salada"
        preco = 15.00
        break;
    case 3: 
        nomeProduto = "X-Bacon"
        preco = 18.00
        break;
   case 4: 
        nomeProduto = "Bauru"
        preco = 12.00
        break;
   case 5: 
        nomeProduto = "Refrigerante"
        preco = 8.00
        break;
   case 6: 
        nomeProduto = "Suco de laranja"
        preco = 13.00
        break;       
    default:
        console.log("Opção inválida");
        break;
    
}

total = quantidade * preco;

console.log("Produto: " + nomeProduto);
console.log("Valor total: R$ " + total);


