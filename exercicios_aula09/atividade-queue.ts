import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();

let opcao: number = 0;

do {
    console.log("\nMenu:");
    console.log("***********************************************************");
    console.log("                                                           ");
    console.log("              1 - Adicionar cliente na fila                ");
    console.log("              2 - Listar todos os clientes                 ");
    console.log("              3 - Retirar cliente da fila                  ");
    console.log("              0 - Sair                                     ");
    console.log("                                                           ");
    console.log("***********************************************************");

    opcao = readlinesync.questionInt("\nEscolha uma opção: ");

    switch (opcao) {
        case 1:
            let nome = readlinesync.question("\nDigite o nome do cliente: ");
            fila.enqueue(nome);
            console.log("\nCliente adicionado!");
            break;
        case 2:
            console.log("\nLista de clientes na fila: ");
            fila.printQueue();

            break;

        case 3:
            if(fila.isEmpty()){
                console.log("\nA fila está vazia");
            }else{
                console.log("\nO cliente foi chamado! " + fila.dequeue());

            }
            
            break;

        case 0:
            console.log("\nPrograma finalizado!");
            break;

        default:
            console.log("\nOpção inválida");
            break; 

    }
} while(opcao != 0);

