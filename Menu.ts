import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";

export function main() {
    while (true) {
        console.log(colors.fg.magentastrong,
            "*******************");
        console.log("                                                     ");
        console.log("                     Luminaire Games                 ");
        console.log("                                                     ");
        console.log("*******************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Games                      ");
        console.log("            2 - Listar todos os Games                ");
        console.log("            3 - Buscar Games por Numero              ");
        console.log("            4 - Atualizar Catálogo                   ");
        console.log("            5 - Deletar Games do Catálogo            ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*******************");
        console.log(colors.reset);

        let opcao = readlinesync.questionInt("Escolha uma opção: ");

        switch (opcao) {
            case 1:
                console.log("-> Cadastrar Games");
                break;
            case 2:
                console.log("-> Listar Games");
                break;
            case 3:
                console.log("-> Buscar Games");
                break;
            case 4:
                console.log("-> Atualizar Games");
                break;
            case 5:
                console.log("-> Deletar Games");
                break;
            case 6:
                sobre();
                console.log("-> Encerrando o programa...");
                process.exit(0);
            default:
                console.log("-> Opção inválida!");
        }

        keyPress();
    }
}

export function sobre(): void {
    console.log("\n*******************");
    console.log("Projeto Desenvolvido por: Vitor Nazareth");
    console.log("Generation Brasil - vitorzath@gmail.com");
    console.log("https://github.com/aioryu");
    console.log("*******************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.question("");
}

main();
