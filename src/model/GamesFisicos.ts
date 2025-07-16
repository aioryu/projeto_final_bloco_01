import { Games } from "./Games";

export class Fisico extends Games {
    private _quantidade: number;

    constructor(numero: number, ano: number, genero: number, titulo: string, classi: number, diretor: string, tipo: number, quantidade: number) {
        super(numero, ano, genero, titulo, classi, diretor, tipo);
        this._quantidade = quantidade;
    }

    public get quantidade() {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public override visualizar(): void {
        super.visualizar();
        console.log("Quantidade em estoque: " + this._quantidade);
    }
}