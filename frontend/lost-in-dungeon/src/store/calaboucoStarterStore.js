import constantes from '../utils/constantes';
import GeradorTextoStore from './geradorTextoStore';
import MonstrosStore from './monstrosStore';
import Fase from '../utils/Fase';
import Jogador from '../utils/Jogador';

class CalaboucoStarterStore {
    qtdFasesTotais = 0;
    indexfaseAtual = -1; // Necessario manter em -1 pois ao chamar o metodo (avancarFase) o index sera 0 pegando a primeira fase na lista de fases totais. [REVISAR SE POSSIVEL]
    fasesCalabouco = [];
    geradorTextoStore = new GeradorTextoStore();
    monstrosStore = new MonstrosStore();
    faseAtual = new Fase();
    jogador = new Jogador();

    constructor(geradorTextoStore, monstrosStore, qtdfases) {
        this.geradorTextoStore = geradorTextoStore;
        this.monstrosStore = monstrosStore;
        this.qtdFasesTotais = qtdfases;

        this.monstrosStore._gerarMonstros();
        this._gerarfases();
    }

    _getRandomNumber(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

    _indexValido(index, indexMaximo) {
        let indexFinal = index;
        if(index > indexMaximo || index < 0 || index == undefined) {
            indexFinal = this._getRandomNumber(indexMaximo);
        }

        return indexFinal;
    }

    _criarFase(indexFase) {
        try {
            indexFase = this._indexValido(indexFase, constantes.fases.length);
            const fase = new Fase(structuredClone(constantes.fases[indexFase]));
            this.fasesCalabouco.push(fase);
        } catch (error) {
            console.log(error, 'Erro ao gerar fase!');
        }
    }

    _gerarfases() {
        try {
            //Gera as fases do calabouço baseado na quantidade totais de fases informadas.
            for (let index = 0; index < this.qtdFasesTotais; index++) {
                this._criarFase();
            }

            this.geradorTextoStore.gerouCalabouco(); //LOG {Gerou Calabouco}
            this.avancarFase(); // Avancar para a primeira fase da lista de fases totai geradas anteriormente.
        } catch (error) {
            console.log(error, 'Erro ao montar calabouço!');
        }
    }

    combateComMonstro(indexAcao) {
        const { monstro } = this.monstrosStore;

        monstro.receberDano(this.jogador.status.ataque);
        this.geradorTextoStore.gerarLog('Você ataca ' + monstro.descricao + '!!!');
        console.log(monstro.status);

        if(!monstro.monstroMorreu) {
            const acaoMostro = monstro.realizarAcao();
            this.jogador.receberAcaoMonstro(acaoMostro);
            this.geradorTextoStore.gerarLog(monstro.descricao + ' usa ' + acaoMostro.descricao + ' em você!');
            
            if(this.jogador.jogadorMorreu) {
                this.faseAtual = null;
                this.jogador.jogadorMorreu = true;
                this.jogador.encontrouMonstro = false;
                this.geradorTextoStore.jogadorMorreu();
            }
        } else {
            this.geradorTextoStore.gerarLog('VOCÊ MATOU ' + monstro.descricao.toUpperCase() + '!!!');

            this.monstrosStore.matarMonstro();
            this.jogador.encontrouMonstro = false;
            this.avancarFase(); 
        }
    }

    fezEscolhaEmFase(indexAcao) {
        try {
            if(this.jogador.encontrouMonstro) {
                this.combateComMonstro(indexAcao);
                return;
            } else {
                const consequencia = this.faseAtual.resultados[indexAcao];
                this.jogador.lidarComConsequencia(consequencia);
                this.geradorTextoStore.gerarLog('RESULTADO: '+consequencia.descricao); //LOG {Escolha}

                if(this.jogador.encontrouMonstro && this.monstrosStore.existeMonstros) {
                    this.monstrosStore.chamarMonstro();
                    return;
                } else if(consequencia == 'ENCONTRO_MONSTRO') {
                    this.jogador.encontrouMonstro = false;
                    this.geradorTextoStore.semMonstrosDefinitivo(); //LOG {Sem Monstros}
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

    avancarFase() {
        try {
            this.indexfaseAtual += 1;
            if(this.indexfaseAtual < this.fasesCalabouco.length) {      
                this.faseAtual = this.fasesCalabouco[this.indexfaseAtual];

                this.geradorTextoStore.gerarLog('Você avança para a sala adiante...'); //LOG {Avanco Fase}
                this.geradorTextoStore.descricaoPorChatgptSala(this.faseAtual.descricaoChatGpt); //LOG {Fase Descricao}
            } else {
                this.faseAtual = null;
                this.geradorTextoStore.jogadorEscapou(); //LOG {Escapou}
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