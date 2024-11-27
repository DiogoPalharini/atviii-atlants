import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Acomodacao from "../modelos/acomodacao";
import Armazem from "../dominio/armazem";

export default class VincularClienteAcomodacao extends Processo {
    private clientes: Cliente[];
    private acomodacoes: Acomodacao[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes; // Lista de clientes cadastrados
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes; // Lista de acomodações
    }

    processar(): void {
        console.clear();
        console.log("Vinculando cliente a uma acomodação...");
        
        // Listar clientes disponíveis
        console.log("Clientes disponíveis:");
        this.clientes.forEach((cliente, index) => {
            console.log(`${index + 1} - ${cliente.Nome}`);
        });
        let clienteIndex = this.entrada.receberNumero("Selecione o cliente pelo número:");
        let clienteSelecionado = this.clientes[clienteIndex - 1];

        // Listar acomodações disponíveis
        console.log("Acomodações disponíveis:");
        this.acomodacoes.forEach((acomodacao, index) => {
            console.log(`${index + 1} - ${acomodacao.NomeAcomadacao} (Ocupantes: ${acomodacao.Ocupantes.length})`);
        });
        let acomodacaoIndex = this.entrada.receberNumero("Selecione a acomodação pelo número:");
        let acomodacaoSelecionada = this.acomodacoes[acomodacaoIndex - 1];

        // Vincular cliente à acomodação
        let sucesso = acomodacaoSelecionada.adicionarOcupante(clienteSelecionado);
        if (sucesso) {
            console.log(`Cliente ${clienteSelecionado.Nome} foi vinculado à acomodação ${acomodacaoSelecionada.NomeAcomadacao}.`);
        }
    }
}
