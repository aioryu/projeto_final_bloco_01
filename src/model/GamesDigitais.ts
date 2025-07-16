import { Games } from "./Games";

export class Digital extends Games {
    constructor(
        numero: number,
        ano: number,
        genero: number,
        titulo: string,
        classi: number,
        diretor: string,
        tipo: number
    ) {
        super(numero, ano, genero, titulo, classi, diretor, tipo);
    }

    public override visualizar(): void {
        super.visualizar();
        console.log("Tipo: Digital (não possui estoque físico)");
    }
}