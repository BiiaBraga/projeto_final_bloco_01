/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importações
import {Instrumento} from "./Instrumento"
import { colors } from "../util/Colors";

//sub classe ContaCorrente
export class InstrumentoPercussao extends Instrumento {

    //atributos
    private _material : string;
    private _diametro: number;

    //construtor
    constructor (id:number, nome:string, marca:string, preco:number, tipo:number, estoque:number, material:string, diametro: number){
        super(id, nome, marca, preco, tipo, estoque);
        this._material = material;
        this._diametro = diametro;
    }

    //get
    public get material(){
        return this._material;
    }
    public get diametro(){
        return this._diametro;
    }

    //set
    public set material(material:string){
        this._material = material;
    }
    public set afinacao(diametro:number){
        this._diametro = diametro;
    }

    //metodo visualizar
    public visualizar(): void {
        super.visualizar();
        //console.log(colors.fg.white);
        console.log("Material: " + this._material);
        console.log("Diametro: " + this._diametro);
        console.log("*****************************************************");
        console.log(colors.reset);
    }

}