/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importações
import { Instrumento } from "../model/Instrumento";

//interface
export interface InstrumentoRepository{

    //CRUD
    cadastrar(instrumento: Instrumento) : void;
    atualizar(instrumento: Instrumento): void;
    deletar(id: number): void;
    listarTodas(): void;

}