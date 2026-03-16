/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importações
import {Instrumento} from "./Instrumento"

//sub classe ContaCorrente
export class InstrumentoSopro extends Instrumento {

    //atributos
    private _material : string;
    private _afinacao: string;

    //construtor
    constructor (id:number, nome:string, marca:string, preco:number, tipo:number, estoque:number, material:string, afinacao: string){
        super(id, nome, marca, preco, tipo, estoque);
        this._material = material;
        this._afinacao = afinacao;
    }

    //get
    public get material(){
        return this._material;
    }

    public get afinacao(){
        return this._afinacao;
    }

    //set
    public set material(material:string){
        this._material = material;
    }
    public set afinacao(afinacao:string){
        this._afinacao = afinacao;
    }

    //metodo visualizar
    public visualizar(): void {
        super.visualizar();
        console.log("Material: " + this._material);
        console.log("Afinacao: " + this._afinacao);
        console.log("*****************************************************");
    }

}