import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes;
    }

    processar(): void {
        console.log("Registrando todas as acomodações no sistema...");

        // Adicionando todas as acomodações ao armazém
        this.acomodacoes.push(new DiretorSolteiroSimples().construir());
        this.acomodacoes.push(new DiretorFamiliaSimples().construir());
        this.acomodacoes.push(new DiretorCasalSimples().construir());
        this.acomodacoes.push(new DiretorFamiliaMais().construir());
        this.acomodacoes.push(new DiretorFamiliaSuper().construir());
        this.acomodacoes.push(new DiretorSolteiroMais().construir());

        console.log("Todas as acomodações foram registradas com sucesso!");
    }
}
