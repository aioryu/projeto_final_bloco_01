import { Games } from "../model/Games";
import { GamesRepository } from "../repository/GamesRepository";
import { colors } from "../util/Colors";

export class GamesController implements GamesRepository {

    private listaGames: Array<Games> = new Array<Games>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaGame = this.buscarNoArray(numero);

        if (buscaGame != null) {
            buscaGame.visualizar();
        }else {
            console.log(colors.fg.blue, `\nO Game número ${numero} não foi encontrado!`, colors.reset);
        }
    }

    listarTodos(): void {
        if (this.listaGames.length === 0) {
            console.log("\nNenhum game cadastrado no catálogo!");
            return;
        }
        for (let game of this.listaGames){
            game.visualizar();
        }
    }

    cadastrar(game: Games): void {
        this.listaGames.push(game);
        console.log(colors.fg.yellow, `\nO game numero ${game.numero} foi Adicionado com sucesso!`, colors.reset);
    }

    atualizar(game: Games): void {
        let buscaGame = this.buscarNoArray(game.numero);

        if(buscaGame != null) {
            this.listaGames[this.listaGames.indexOf(buscaGame)] = game;
            console.log(colors.fg.blue, `\nO game numero ${game.numero} foi atualizado com sucesso!`, colors.reset);
        }else {
            console.log(colors.fg.red, `\nO game número ${game.numero} não foi encontrado :( `, colors.reset);
        }
    }

    deletar(numero: number): void {
        let buscaGame = this.buscarNoArray(numero);

        if(buscaGame != null) {
            this.listaGames.splice(this.listaGames.indexOf(buscaGame), 1);
            console.log(colors.fg.blue, `\nO game número ${numero} foi deletado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO game número ${numero} não foi encontrado!`, colors.reset);
        }
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Games | null {

        for (let game of this.listaGames) {
            if (game.numero === numero) 
                return game;
        }

        return null;
    } 
}