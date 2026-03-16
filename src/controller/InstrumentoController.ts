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
            console.log(colors.fg.red, error.message, colors.reset);
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
            console.log(colors.fg.red, error.message, colors.reset);
        }
        
    }

    listarTodas(): void {
        for (let instrumento of this.listaInstrumentos){
            instrumento.visualizar();
        }
    }

    registrarVenda(id: number, quantidade:number): void{
        try{
            let instrumento = this.buscarNoArray(id);
            if (instrumento != null){

                if(instrumento.estoque >= quantidade){
                    instrumento.estoque -= quantidade;
                    console.log(colors.fg.green, "\nVenda registrada com sucesso!");
                    console.log("Estoque atual:", instrumento.estoque);

                    if(instrumento.estoque == 0){
                        this.deletarSilencioso(id);
                        console.log(colors.fg.yellow, "Produto esgotado e removido do estoque!");
                    }

                } else {
                    throw new Error("\nProduto sem estoque suficiente!");
                }

            } else {
                throw new Error("\nInstrumento não encontrado!");
            }

        } catch(error:any){
            console.log(colors.fg.red, error.message, colors.reset);
        }
    }

    deletarSilencioso(id: number): void {
        try{
            let buscaInstrumento = this.buscarNoArray(id);
            if(buscaInstrumento != null){
                this.listaInstrumentos.splice(this.listaInstrumentos.indexOf(buscaInstrumento), 1);
            }else{
                throw new Error("\nO instrumento de código: " + id + " nao foi encontrado!");
            }
        } catch (error:any){
            console.log(colors.fg.red, error.message, colors.reset);
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