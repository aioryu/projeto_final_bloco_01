import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { GamesController } from "./src/controller/GamesController";
import { Fisico } from "./src/model/GamesFisicos";
import { Digital } from "./src/model/GamesDigitais";
import { Games } from "./src/model/Games";


export function main() {
    let games: GamesController = new GamesController(); 

    let opcao, numero, ano, genero, classi, tipo, quantidade: number;
    let studio, titulo;
    const tipoGame = ['Fisico', 'Digital'];
    const generoGame = ['RPG', 'Acao', 'Luta', 'Corrida', 'Esporte', 'FPS', 'Terror'];
    const classificacao = ['Livre', '12 Anos', '16 Anos', '+18'];

    

    while (true) {

        console.log(colors.fg.magentastrong,
                    "*******************");
        console.log("                                                     ");
        console.log("                     Luminaire Games                 ");   
        console.log("                                                     ");
        console.log("*******************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Games                     ");
        console.log("            2 - Listar todos os Games               ");
        console.log("            3 - Buscar Games por Numero              ");
        console.log("            4 - Atualizar Catálogo                   ");
        console.log("            5 - Deletar Games do Catálogo            ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*******************");
        console.log("                                                     ",
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nLuminaire - Todos os games!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\n--------+ Cadastro de Games +--------\n\n");

                console.log("\nDigite o numero do Games: ");
                numero = readlinesync.questionInt("");
                
                do{
                    console.log("\nDigite o Ano de Lançamento: ");
                    ano = readlinesync.questionInt("");
                    if (ano < 1000 || ano > 9999) {
                        console.log("Ano Inválido! Digite um ano com 4 dígitos.");
                    }
                } while (ano < 1000 || ano > 9999);
            
                console.log("\nDigite o Título do Game: ");
                titulo = readlinesync.question("");

                console.log("\nDigite o(a) Studio(a): ");
                studio = readlinesync.question("");
                
                console.log("\n----+ TIPO +---- ");
                tipo = readlinesync.keyInSelect(tipoGame, "", {cancel: false}) + 1;

                console.log("\n----+ GÊNERO +----");
                genero = readlinesync.keyInSelect(generoGame, "", {cancel: false}) + 1;

                console.log("\n----+ Classificação +----");
                classi = readlinesync.keyInSelect(classificacao, "", {cancel: false}) +1;

                switch (tipo) {
                    case 1:
                        console.log("Digite a Quantidade de Games: ");
                        quantidade = readlinesync.questionInt("");
                        games.cadastrar(
                            new Fisico(games.gerarNumero(), ano, genero, titulo, classi, studio, tipo, quantidade));
                        break;
                    case 2:
                        console.log("O Game está Disponível Para Envio!");
                        games.cadastrar(
                            new Digital(games.gerarNumero(), ano, genero, titulo, classi, studio, tipo));
                        break;
                    default:
                        console.log("Opção Inválida!")
                        break;
                    }
            
            keyPress()
            break;
            case 2:

                games.listarTodos();
                
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nBuscar Game\n", colors.reset);

                console.log("Digite o número do Game: ");
                numero = readlinesync.questionInt("");
                games.procurarPorNumero(numero);
                
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar Catálogo\n\n", colors.reset);

                console.log("\nDigite o numero do Game: ");
                numero = readlinesync.questionInt("");
                
                do{
                    console.log("\nDigite o Ano de Lançamento: ");
                    ano = readlinesync.questionInt("");
                    if (ano < 1000 || ano > 9999) {
                        console.log("Ano Inválido! Digite um ano com 4 dígitos.");
                    }
                } while (ano < 1000 || ano > 9999);
            
                console.log("\nDigite o Título do Game: ");
                titulo = readlinesync.question("");

                console.log("\nDigite o(a) Studio(a): ");
                studio = readlinesync.question("");
                
                console.log("\n----+ TIPO +---- ");
                tipo = readlinesync.keyInSelect(tipoGame, "", {cancel: false}) + 1;

                console.log("\n----+ GÊNERO +----");
                genero = readlinesync.keyInSelect(generoGame, "", {cancel: false}) + 1;

                console.log("\n----+ Classificação +----");
                classi = readlinesync.keyInSelect(classificacao, "", {cancel: false}) +1;

                switch (tipo) {
                    case 1:
                        console.log("Digite a Quantidade de Games: ");
                        quantidade = readlinesync.questionInt("");
                        games.atualizar(
                            new Fisico(numero, ano, genero, titulo, classi, studio, tipo, quantidade));
                        break;
                    case 2:
                        console.log("O Game está Disponível Para Envio!");
                        games.atualizar(
                            new Digital(numero, ano, genero, titulo, classi, studio, tipo));
                        break;
                    default:
                        console.log(`${colors.fg.redstrong}\nO game número ${numero} não foi encontrado.${colors.reset}`);
                        break;
                    }
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nDeletar Game\n\n", colors.reset);

                console.log("Digite o Número do Game: ");
                numero = readlinesync.questionInt("");
                games.deletar(numero);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n")

                keyPress()
                break;
        }
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
        console.log(colors.reset, "");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt(); 
}main();
