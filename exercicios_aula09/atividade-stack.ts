import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();

let opcao: number = 0;

do{
    console.log("\nMenu:");
    console.log("***********************************************************");
    console.log("                                                           ");
    console.log("         1 - Adicionar livros na pilha"                     );
    console.log("         2 - Listar todos os livros"                        );
    console.log("         3 - Retirar livro da pilha"                        );
    console.log("         0 - Sair"                                          );
    console.log("                                                           ");
    console.log("***********************************************************");

    opcao = readlinesync.questionInt("Entre com a opção desejada: ");

    switch (opcao) {
        case 1:
            let livro = readlinesync.question("\nDigite o nome do livro: ");
            pilha.push(livro);
            console.log("\nLivro adicionado!");
            break;
        case 2:
            console.log("\nLista de livros na pilha: ");
            pilha.printStack();
            break;
        case 3:
            if(pilha.isEmpty()){
                console.log("\nA pilha está vazia");
            }else{
                console.log("\nUm livro foi retirado da pilha! " + pilha.pop());
            }
            break;

        case 0:
            console.log("\nPrograma finalizado!");
            break;

        default:
            console.log("\nOpção inválida");
            break;    
                
    }
}while(opcao != 0);

  






