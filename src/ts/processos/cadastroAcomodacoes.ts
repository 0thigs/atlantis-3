import Processo from "../abstracoes/processo";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]

    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void {
        let diretorSolteiroSimples = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretorSolteiroSimples.construir())

        let diretorSolteiroMais = new DiretorSolteiroMais()
        this.acomodacoes.push(diretorSolteiroMais.construir())

        let diretorCasalSimples = new DiretorCasalSimples()
        this.acomodacoes.push(diretorCasalSimples.construir())

        let diretorFamiliaSimples = new DiretorFamiliaSimples()
        this.acomodacoes.push(diretorFamiliaSimples.construir())

        let diretorFamiliaMais = new DiretorFamiliaMais()
        this.acomodacoes.push(diretorFamiliaMais.construir())

        let diretorFamiliaSuper = new DiretorFamiliaSuper()
        this.acomodacoes.push(diretorFamiliaSuper.construir())
    }
}