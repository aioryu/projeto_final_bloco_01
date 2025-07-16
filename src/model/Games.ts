import readlinesync = require("readline-sync");

export abstract class Games {
    private _numero: number;
    private _ano: number;
    private _genero: number;
    private _titulo: string;
    private _classi: number;
    private _studio: string;
    private _tipo: number;

    constructor(numero: number, ano: number, genero: number, titulo: string, classi: number, studio: string, tipo: number) {
        this._numero = numero;
        this._ano = ano;
        this._genero = genero;
        this._titulo = titulo;
        this._classi = classi;
        this._studio = studio;
        this._tipo = tipo;
    }

    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get ano() {
        return this._ano;
    }

    public set ano(ano: number) {
        this._ano = ano;
    }

    public get genero() {
        return this._genero;
    }

    public set genero(genero: number) {
        this._genero = genero;
    }

    public get titulo() {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get classi() {
        return this._classi;
    }

    public set classi(classi: number) {
        this._classi = classi;
    }

    public get studio() {
        return this._studio;
    }

    public set studio(studio: string) {
        this._studio = studio;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public visualizar(): void {

        let genero: string = "";

        switch (this._genero) {
            case 1:
                genero = "RPG"
                break;
            case 2:
                genero = "Ação"
                break;
            case 3:
                genero = "Luta"
                break;
            case 4:
                genero = "Corrida"
                break;
            case 5:
                genero = "Esporte"
                break;
            case 6:
                genero = "FPS"
                break;
            case 7:
                genero = "Terror"
                break;
            
            default:
                console.log("\nOpção Inválida!\n")

                keyPress();
                break;
        }

        let classi: string = "";

        switch (this._classi) {
            case 1:
                classi = "Livre"
                break;
            case 2:
                classi = "12 anos"
                break;
            case 3:
                classi = "16 anos"
                break;
            case 4:
                classi = "+18"
                break;

            default:
                console.log("\nOpção Inválida!\n")
                
                keyPress();
                break;
        }

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Fisico"
                break;
            case 2:
                tipo = "Digital"
                break;
        
            default:
                console.log("\nOpção Inválida!")
                break;
        }

        console.log("\n\n******************");
        console.log("\t\tDADOS DOS GAMES\t\t");
        console.log("****************\n");
        console.log("Numero do Game: " + this._numero);
        console.log("Ano de Lançamento: " + this._ano);
        console.log("Gênero do Game: " + genero);
        console.log("Titulo do Game: " + this._titulo);
        console.log("Studio(a): " + this._studio);
        console.log("Classificação Indicativa: " + classi);
        console.log("Formato: " + tipo);
    }
}

function keyPress(): void {
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
}