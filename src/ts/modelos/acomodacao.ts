import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import Cliente from "./cliente";

export default class Acomodacao {
    private nomeAcomadacao: NomeAcomadacao;
    private camaSolteiro: number;
    private camaCasal: number;
    private suite: number;
    private climatizacao: boolean;
    private garagem: number;
    private ocupantes: Cliente[] = []; // Lista de ocupantes na acomodação

    constructor(
        nomeAcomadacao: NomeAcomadacao,
        camaSolteiro: number,
        camaCasal: number,
        suite: number,
        climatizacao: boolean,
        garagem: number
    ) {
        this.nomeAcomadacao = nomeAcomadacao;
        this.camaSolteiro = camaSolteiro;
        this.camaCasal = camaCasal;
        this.suite = suite;
        this.climatizacao = climatizacao;
        this.garagem = garagem;
    }

    // Getters
    public get NomeAcomadacao() { return this.nomeAcomadacao; }
    public get CamaSolteiro() { return this.camaSolteiro; }
    public get CamaCasal() { return this.camaCasal; }
    public get Suite() { return this.suite; }
    public get Climatizacao() { return this.climatizacao; }
    public get Garagem() { return this.garagem; }
    public get Ocupantes() { return this.ocupantes; }

    // Método para adicionar um ocupante
    public adicionarOcupante(cliente: Cliente): boolean {
        const capacidadeMaxima = this.camaSolteiro + this.camaCasal;

        if (this.ocupantes.length < capacidadeMaxima) {
            this.ocupantes.push(cliente);
            console.log(`Cliente ${cliente.Nome} foi adicionado à acomodação ${this.nomeAcomadacao}.`);
            return true;
        } else {
            console.log(`Acomodação ${this.nomeAcomadacao} está lotada! Não é possível adicionar mais ocupantes.`);
            return false;
        }
    }

    // Método para listar ocupantes
    public listarOcupantes(): void {
        if (this.ocupantes.length === 0) {
            console.log(`Acomodação ${this.nomeAcomadacao} está vazia.`);
        } else {
            console.log(`Ocupantes da acomodação ${this.nomeAcomadacao}:`);
            this.ocupantes.forEach((ocupante, index) => {
                console.log(`${index + 1} - ${ocupante.Nome}`);
            });
        }
    }
}
