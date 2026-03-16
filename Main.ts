/**
 * Autora: Beatriz Braga Silva
 * Data: 16/03
 */

//importações
import readlinesync = require ('readline-sync');
import { colors } from './src/util/Colors';
import { InstrumentoCordas } from './src/model/InstrumentoCordas';
import { InstrumentoSopro } from './src/model/InstrumentoSopro';

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
    console.log("\n\n");

    //variaveis e constantes
    let continuar: boolean = true;
    let opcaoMenu: number;

    //Objeto da Classe Instrumento Cordas (Teste)
    const instrumentosCordas: InstrumentoCordas = new InstrumentoCordas(1, "Violao Folk", "Tagima", 850, 1, 15, 6, "aco");
    instrumentosCordas.visualizar();

    // Objeto da Classe Instrumento Sopro (teste)
    const instrumentosSopro: InstrumentoSopro = new InstrumentoSopro(2, "Trompete", "Bach", 6000, 2, 10, "latao", "Bb");
    instrumentosSopro.visualizar();

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
        console.log("\n\n");

        opcaoMenu = readlinesync.questionInt("Digite uma opcao: ");

        switch(opcaoMenu){
            case 1:
                console.log("\nCadastrar instrumento");
                break;

            case 2:
                console.log("\nAtualizar instrumento");
                break;

            case 3:
                console.log("\nDeletar instrumento");
                break;

            case 4:
                console.log("\nVisuzalizar instrumentos");
                break;

            case 5:
                console.log("\nSair");
                continuar = false;
                break;

            default:
                console.log("\nOpcao invalida!");
                break;
        }

    }
}

//chama a funçào principal
Main();