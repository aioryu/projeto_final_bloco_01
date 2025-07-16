import { Games } from "../model/Games";

export interface GamesRepository {

    procurarPorNumero(numero: number): void;
    listarTodos(): void;
    cadastrar(game: Games): void;
    atualizar(game: Games): void;
    deletar(numero: number): void; 
}