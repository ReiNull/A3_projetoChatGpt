import Fase from '../utils/Fase';
import GeradorTextoStore from '../store/geradorTextoStore';

class CalaboucoStarterStore {
    qtdFasesTotais = 0;
    indexfaseAtual = -1; // Necessario manter em -1 pois ao chamar o metodo (avancarFase) o index sera 0 pegando a primeira fase na lista de fases totais. [REVISAR SE POSSIVEL]
    fasesCalabouco = [];
    faseAtual = new Fase();
    geradorTextoStore = new GeradorTextoStore();

    constructor(qtdfases, geradorTextoStore) {
        this.qtdFasesTotais = qtdfases;
        this.geradorTextoStore = geradorTextoStore;

        this._gerarfases();
    }

    _gerarfases() {
        try {
            //Gera as fases do calabouço baseado na quantidade totais de fases informadas.
            for (let index = 0; index < this.qtdFasesTotais; index++) {
                const novaFase = new Fase();
                novaFase.carregarFaseAleatoria();
                this.fasesCalabouco.push(novaFase);
            }
            //LOG {Gerou Calabouco}
            this.geradorTextoStore.gerouCalabouco();
            
            // Avancar para a primeira fase da lista de fases totai geradas anteriormente.
            this.avancarFase();
        } catch (error) {
            console.log(error, 'Erro ao montar calabouço!');
        }
    }

    fezEscolhaEmFase(indexAcao) {
        try {
            //LOG {Escolha}
            this.geradorTextoStore.gerarLog('Você fez sua escolha, e o resultao é: ' + this.faseAtual.resultados[indexAcao]);
            // Avancar para a primeira fase da lista de fases totai geradas anteriormente.
        } catch (error) {
            console.log(error, 'Erro ao fazer escolha em fase!');
        }
    }

    avancarFase() {
        // if(this.indexfaseAtual === 0) return; // TESTE apenas com uma sala. [REMOVER ESSA LINHA]

        this.indexfaseAtual += 1;
        if(this.indexfaseAtual < this.fasesCalabouco.length) {      
            this.faseAtual = this.fasesCalabouco[this.indexfaseAtual];

            //LOG {Avanco Fase}
            this.geradorTextoStore.gerarLog('Você avança para a sala adiante...');
            this.geradorTextoStore.gerarLog(this.faseAtual.descricao);
        } else {
            console.log('Não há mais fases para serem geradas!');
            // Anular variavel afim de fazer botoes de escolha desparecerem.
            this.faseAtual = null;
        }
    }

    get getcalaboucoAcabou() {
        return this.indexfaseAtual > this.fasesCalabouco.length;
    }

    get getfaseAtual() {
       return this.faseAtual;
    }

    get getAcoesfase() {
        return this.faseAtual ? this.faseAtual.escolhas : null;
    }
}

export default CalaboucoStarterStore;