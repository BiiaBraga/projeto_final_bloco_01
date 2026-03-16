/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importacoes
import { colors } from "../util/Colors";

//classe abstrata de Instrumentos
export abstract class Instrumento{

    //atributos
    private _id: number;
    private _nome: string;
    private _marca: string;
    private _preco: number;
    private _tipo: number;
    private _estoque: number;

    //construtor
    constructor(id:number, nome:string, marca:string, preco:number, tipo:number, estoque:number){
        this._id = id;
        this._nome = nome;
        this._marca = marca;
        this._preco = preco;
        this._tipo = tipo;
        this._estoque = estoque;
    }

    //get
    public get id(){
        return this._id;
    }
    public get nome(){
        return this._nome;
    }
    public get marca(){
        return this._marca;
    }
    public get preco(){
        return this._preco;
    }
    public get tipo() {
        return this._tipo;
    }
    public get estoque() {
        return this._estoque;
    }

    //set
    public set id (id : number) {
        this._id = id;
    }
    public set nome (nome : string) {
        this._nome = nome;
    }
    public set marca (marca : string) {
        this._marca = marca;
    }
    public set preco (preco : number) {
        this._preco = preco;
    }
    public set tipo(tipo: number) {
        this._tipo = tipo;
    }
    public set estoque (estoque : number) {
        this._estoque = estoque;
    }

    //metodo visualizar
    public visualizar(): void {
        let tipo: string = "";
        switch (this._tipo) {
            case 1:
                tipo = "Instrumento de Corda";
                break;
            case 2:
                tipo = "Instrumento de Sopro";
                break;
            case 3:
                tipo = "Instrumento de Percussao";
                break;
        }

        console.log(colors.fg.white,"\n\n*****************************************************");
        console.log("Instrumento:\n");
        console.log("Código do produto: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Preco: R$" + this._preco.toFixed(2));
        console.log("Marca: " + this._marca);
        console.log("Tipo de instrumento: " + tipo);
        console.log(colors.reset);
        
    }
    
}