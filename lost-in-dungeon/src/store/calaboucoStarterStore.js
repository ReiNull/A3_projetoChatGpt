import GeradorTextoStore from '../store/geradorTextoStore';
import Fase from '../utils/Fase';
import Monstro from '../utils/Monstro';
import Jogador from '../utils/Jogador';

class CalaboucoStarterStore {
    qtdFasesTotais = 0;
    indexfaseAtual = -1; // Necessario manter em -1 pois ao chamar o metodo (avancarFase) o index sera 0 pegando a primeira fase na lista de fases totais. [REVISAR SE POSSIVEL]
    fasesCalabouco = [];
    qtdMonstrosTotais = 4;
    monstrosCalabouco = [];
    geradorTextoStore = new GeradorTextoStore();
    faseAtual = new Fase();
    monstro = new Monstro();
    jogador = new Jogador();

    constructor(qtdfases, geradorTextoStore) {
        this.qtdFasesTotais = qtdfases;
        this.geradorTextoStore = geradorTextoStore;

        this._gerarfases();
        this._gerarMonstros();
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

    _gerarMonstros() {
        try {
            //Gera as fases do calabouço baseado na quantidade totais de fases informadas.
            for (let index = 0; index < this.qtdMonstrosTotais; index++) {
                const novoMonstro = new Monstro();
                novoMonstro.carregarMonstroAleatorio();
                this.monstrosCalabouco.push(novoMonstro);
            }
            console.log(this.monstrosCalabouco);
        } catch (error) {
            console.log(error, 'Erro ao gerart monstros!');
        }
    }

    combateComMonstro() {
        this.geradorTextoStore.gerarLog(this.monstro.descricao + ' usa ' + this.monstro.acoes[0].descricao + ' em você!');
    }

    fezEscolhaEmFase(indexAcao) {
        try {
            if(this.jogador.encontrouMonstro) {
                this.combateComMonstro();
                return;
            } else {
                const consequencia = this.faseAtual.resultados[indexAcao];
                this.jogador.lidarComConsequencia(consequencia);

                //LOG {Escolha}
                this.geradorTextoStore.gerarLog('Você fez sua escolha, e o resultado é: ' + consequencia);

                if(this.jogador.encontrouMonstro) {
                    this.monstro = this.monstrosCalabouco[0];
                    this.geradorTextoStore.gerarLog(this.monstro.descricao + ' Surgiu!');
                    return;
                }
                
                if(this.jogador.jogadorMorreu){
                    this.faseAtual = null;
                    this.geradorTextoStore.jogadorMorreu();
                } else {
                    this.avancarFase();
                }
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