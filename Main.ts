/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importações
import readlinesync = require ('readline-sync');
import { colors } from './src/util/Colors';
import { InstrumentoCordas } from './src/model/InstrumentoCordas';
import { InstrumentoSopro } from './src/model/InstrumentoSopro';
import { InstrumentoController } from './src/controller/instrumentoController';

//função principal
function Main(){

    //apresentacao
    console.log("\n\n");
    console.log(colors.bg.black, colors.fg.magentastrong, "                                                ");
    console.log("     Gerenciamento       ────█▀█▄▄▄▄─────██▄───   ");
    console.log("      de produtos        ────█▀▄▄▄▄█─────█▀▀█──   ");
    console.log("      Music Store        ─▄▄▄█─────█──▄▄▄█─────   ");
    console.log("      Instrumentos       ██▀▄█─▄██▀█─███▀█─────   ");
    console.log("        musicais         ─▀▀▀──▀█▄█▀─▀█▄█▀─────   ");
    console.log("                                                 ", colors.reset);

    //variaveis e constantes
    let continuar: boolean = true;
    let opcaoMenu, id, preco, estoque, numCordas, tipo: number;
    let nome, marca, material, afinacao, tipoCordas : string;
    const tiposInstrumentos = ['Cordas', 'Sopro'];

    //Instancia da Coasse ContasController
    let instrumentos: InstrumentoController = new InstrumentoController();

    //menu
    while(continuar){

        console.log(colors.fg.magentastrong);
        console.log("♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬");
        console.log("♬                                               ♬  ");
        console.log("♬                  Music Store                  ♬  ");
        console.log("♬                                               ♬  ");
        console.log("♬          1. Cadastrar instrumento             ♬  ");
        console.log("♬          2. Atualizar instrumento             ♬  ");
        console.log("♬          3. Deletar instrumento               ♬  ");
        console.log("♬          4. Visualizar instrumentos           ♬  ");
        console.log("♬          5. Sair                              ♬  ");
        console.log("♬                                               ♬  ");
        console.log("♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬ ♬  ", colors.reset);
        //console.log("\n");

        console.log(colors.fg.white);
        opcaoMenu = readlinesync.questionInt("Digite uma opcao: ");
        console.log(colors.reset);

        switch(opcaoMenu){
            case 1:
                console.log(colors.fg.magentastrong, "\nCadastrar instrumento", colors.reset);
                console.log(colors.fg.white);

                nome = readlinesync.question("Digite o nome do instrumento: ");
                marca = readlinesync.question("Digite a marca do instrumento: ");
                tipo = readlinesync.keyInSelect(tiposInstrumentos, "Digite o tipo do instrumento: ", {cancel:false}) + 1;
                preco = readlinesync.questionFloat("Digite o preco do instrumento (R$)");
                estoque = readlinesync.questionInt(`Digite a quantidade de ${nome} a ser inserida no estoque: `);

                switch (tipo){
                    case 1:
                        numCordas = readlinesync.questionFloat("Digite a quantidade de cordas: ");
                        tipoCordas = readlinesync.question("Digite o tipo de corda: ");
                        instrumentos.cadastrar(new InstrumentoCordas(instrumentos.gerarId(), nome, marca, preco, tipo, estoque, numCordas, tipoCordas)); 
                        break;
                    case 2:
                        material = readlinesync.question("Digite o material do instrumento: ");
                        afinacao = readlinesync.question("Digite a afinacao do instrumento: ");
                        instrumentos.cadastrar(new InstrumentoSopro(instrumentos.gerarId(), nome, marca, preco, tipo, estoque, material, afinacao)); 
                        break;
                } 
                console.log(colors.reset);

                break;

            case 2:
                console.log(colors.fg.magentastrong, "\nAtualizar instrumento", colors.reset);
                console.log(colors.fg.white);
                
                id = readlinesync.questionInt("Digite o codigo do instrumento: ")

                let instrumentoRemovido = instrumentos.buscarNoArray(id);

                if (instrumentoRemovido != null){

                    nome = readlinesync.question("Digite o nome do instrumento: ");
                    marca = readlinesync.question("Digite a marca do instrumento: ");
                    tipo = readlinesync.keyInSelect(tiposInstrumentos, "Digite o tipo do instrumento: ", {cancel:false}) + 1;
                    preco = readlinesync.questionFloat("Digite o preco do instrumento (R$)");
                    estoque = readlinesync.questionInt(`Digite a quantidade de ${nome} a ser inserida no estoque: `);

                    switch (tipo){
                        case 1:
                            numCordas = readlinesync.questionFloat("Digite a quantidade de cordas: ");
                            tipoCordas = readlinesync.question("Digite o tipo de corda: ");
                            instrumentos.atualizar(new InstrumentoCordas(id, nome, marca, preco, tipo, estoque, numCordas, tipoCordas)); 
                            break;
                        case 2:
                            material = readlinesync.question("Digite o material do instrumento: ");
                            afinacao = readlinesync.question("Digite a afinacao do instrumento: ");
                            instrumentos.atualizar(new InstrumentoSopro(id, nome, marca, preco, tipo, estoque, material, afinacao)); 
                            break;
                    }
                    console.log(colors.reset);

                } else {
                    console.log(colors.fg.red, "\nO instrumento de codigo " + id + "nao foi encontrado!", colors.reset);
                }
                break;

            case 3:
                console.log(colors.fg.magentastrong, "\nDeletar instrumento", colors.reset);
                console.log(colors.fg.white);
                id = readlinesync.questionInt("Digite o codigo do produto: ");
                console.log(colors.reset);
                instrumentos.deletar(id);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.magentastrong, "\nVisualizar instrumentos", colors.reset);
                instrumentos.listarTodas();
                keyPress();
                break;

            case 5:
                console.log(colors.fg.magentastrong, "\nSair", colors.reset);
                continuar = false;
                console.log(colors.reset);
                break;

            default:
                console.log(colors.fg.magentastrong, "\nOpcao invalida!", colors.reset);
                break;
        }

    }

    rodape();

}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

function rodape(): void {
    console.log(colors.fg.white, "\n*****************************************************");
    console.log("Projeto Desenvolvido por: Beatriz Braga Silva");
    console.log("biia.braga.dev@gmail.com");
    console.log("github.com/BiiaBraga");
    console.log("*****************************************************", colors.reset);
}

//chama a funçào principal
Main();