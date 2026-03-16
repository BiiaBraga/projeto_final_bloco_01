/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importações
import { Instrumento } from "../model/Instrumento";
import { InstrumentoRepository } from "../repository/InstrumentoRepository";
import { colors } from "../util/Colors";

//controller
export class InstrumentoController implements InstrumentoRepository{

    private listaInstrumentos: Array<Instrumento> = new Array<Instrumento>();
    id: number = 0;

    cadastrar(instrumento: Instrumento): void {
        this.listaInstrumentos.push(instrumento);
        console.log(colors.fg.green, "\nO instrumento: " + instrumento.nome + " foi cadastrado com sucesso!", colors.reset);
    }

    atualizar(instrumento: Instrumento): void {
        try{
            let buscaInstrumento = this.buscarNoArray(instrumento.id);

            if(buscaInstrumento != null){
                this.listaInstrumentos[this.listaInstrumentos.indexOf(buscaInstrumento)] = instrumento;
                console.log(colors.fg.green, "\nO instrumento com o código: " + instrumento.id + " foi atualizada com sucesso!", colors.reset);
            } else {
                throw new Error("\nO instrumento de código: " + instrumento.id + " nao foi encontrado!");
            }
        } catch (error: any){
            console.log(error.message);
        }
        
    }

    deletar(id: number): void {
        try{
            let buscaInstrumento = this.buscarNoArray(id);

            if(buscaInstrumento != null){
                this.listaInstrumentos.splice(this.listaInstrumentos.indexOf(buscaInstrumento), 1);
                console.log(colors.fg.green, "\nO instrumento de código: " + id + " foi apagado com sucesso!", colors.reset);
            }else{
                throw new Error("\nO instrumento de código: " + id + " nao foi encontrado!");
            }
        } catch (error:any){
            console.log(error.message);
        }
        
    }

    listarTodas(): void {
        for (let instrumento of this.listaInstrumentos){
            instrumento.visualizar();
        }
    }

    //metodos auxiliares
    public buscarNoArray(id: number): Instrumento | null{
        for (let instrumento of this.listaInstrumentos){
            if (instrumento.id === id)
                return instrumento;
        }
        return null;
    }

    public gerarId(): number{
        return ++this.id;
    }

}