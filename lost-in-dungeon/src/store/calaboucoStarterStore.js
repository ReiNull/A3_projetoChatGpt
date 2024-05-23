import GeradorTextoStore from '../store/geradorTextoStore';
import Fase from '../utils/Fase';
import Jogador from '../utils/Jogador';


class CalaboucoStarterStore {
    qtdFasesTotais = 0;
    indexfaseAtual = -1; // Necessario manter em -1 pois ao chamar o metodo (avancarFase) o index sera 0 pegando a primeira fase na lista de fases totais. [REVISAR SE POSSIVEL]
    fasesCalabouco = [];
    geradorTextoStore = new GeradorTextoStore();
    faseAtual = new Fase();
    jogador = new Jogador();

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
            const consequencia = this.faseAtual.resultados[indexAcao];
            this.jogador.lidarComConsequencia(consequencia);
            
            //LOG {Escolha}
            this.geradorTextoStore.gerarLog('Você fez sua escolha, e o resultado é: ' + consequencia);
            if(this.jogador.jogadorMorreu){
                this.faseAtual = null;
                this.geradorTextoStore.jogadorMorreu();
            } else {
                this.avancarFase();
            }
        } catch (error) {
            console.log(error, 'Erro ao fazer escolha em fase!');
        }
    }

    // Avancar para proxima fase ou remover sala tirando botoes de escolha.
    avancarFase() {
        try {
            this.indexfaseAtual += 1;
            if(this.indexfaseAtual < this.fasesCalabouco.length) {      
                this.faseAtual = this.fasesCalabouco[this.indexfaseAtual];

                //LOG {Avanco Fase}
                this.geradorTextoStore.gerarLog('Você avança para a sala adiante...');
                this.geradorTextoStore.gerarLog(this.faseAtual.descricao);
            } else {
                this.faseAtual = null;
                //LOG {Escapou}
                this.geradorTextoStore.jogadorEscapou();
            }
        } catch (error) {
            console.log('Não há mais fases para serem geradas!');
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

    get salasRestantes() {
        return this.qtdFasesTotais - this.indexfaseAtual;
    }
}

export default CalaboucoStarterStore;