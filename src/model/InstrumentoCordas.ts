/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importações
import {Instrumento} from "./Instrumento"
import { colors } from "../util/Colors";

//sub classe ContaCorrente
export class InstrumentoCordas extends Instrumento {

    //atributos
    private _numCordas : number;
    private _tipoCordas: string;

    //construtor
    constructor (id:number, nome:string, marca:string, preco:number, tipo:number, estoque:number, numCordas:number, tipoCordas: string){
        super(id, nome, marca, preco, tipo, estoque);
        this._numCordas = numCordas;
        this._tipoCordas = tipoCordas;
    }

    //get
    public get numCordas(){
        return this._numCordas;
    }
    public get tipoCordas(){
        return this._tipoCordas;
    }

    //set
    public set numCordas(qtd:number){
        this._numCordas = qtd;
    }
    public set tipoCordas(tipo:string){
        this._tipoCordas = tipo;
    }

    //metodo visualizar
    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.white,"Numero de cordas: " + this._numCordas);
        console.log("Tipo de cordas: " + this._tipoCordas);
        console.log("*****************************************************");
        console.log(colors.reset);
    }

}