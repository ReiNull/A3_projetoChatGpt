import constantes from '../utils/constantes';
import GeradorTextoStore from './geradorTextoStore';
import MonstrosStore from './monstrosStore';
import Fase from '../utils/Fase';
import Jogador from '../utils/Jogador';
import Monstro from '../utils/Monstro';

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
        if (index > indexMaximo || index < 0 || index == undefined) {
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

    calculoCombateJogador(indexAcao) {
        const { monstro } = this.monstrosStore;
        if (indexAcao == 1) {
            if (monstro.status.esquiva < this._getRandomNumber(99) + 1) {
                let ataqueMD = this.jogador.status.ataque - monstro.status.defesa;
                if (ataqueMD > 0) {
                    let danoTotal = Math.floor((ataqueMD / (this._getRandomNumber(3) + 1)) + this.jogador.status.dano);
                    monstro.receberDano(danoTotal);

                    this.geradorTextoStore.gerarLog('Você ataca ' + monstro.descricao + ' causando ' + danoTotal + ' de dano!!!');
                } else {
                    this.geradorTextoStore.gerarLog('Você não possui o suficiente de ataque para passar da defesa do monstro!!!');
                }
            } else {
                this.geradorTextoStore.gerarLog(monstro.descricao + ' se esquivou do seu ataque!!!');
            }
        } else if (indexAcao == 2) {
            const defesa = this.jogador.status.defesa > 0 ? this.jogador.status.defesa : constantes.jogador.status.defesa;
            let aumentarDefesa = Math.floor(defesa / (this._getRandomNumber(5) + 1));
            this.jogador.status.defesa += aumentarDefesa;

            this.geradorTextoStore.gerarLog('Sua defesa aumentou em ' + aumentarDefesa + ' pontos!!!');
        } else if (indexAcao == 3) {
            this.jogador.esquivou = true;

            this.geradorTextoStore.gerarLog('Você se prepara para esquivar!!!');
        } else if (indexAcao == 4) {
            let chanceFugir = Math.floor(((this.jogador.status.esquiva * 2) - (monstro.status.ataque / 2) + (this._getRandomNumber(10) + 1)));
            if (chanceFugir > this._getRandomNumber(99) + 1) {
                this.geradorTextoStore.gerarLog('Você escapou do monstro: ' + monstro.descricao + '!!!');
                
                this.jogador.encontrouMonstro = false;
                monstro = new Monstro();
                this.avancarFase();
            } else {
                this.geradorTextoStore.gerarLog('Você não conseguiu escapar do monstro: ' + monstro.descricao + '!!!');
            }
        }
    }

    logConsequencias(acaoMostro) {
        if(acaoMostro.statusDebuff) {
            if(acaoMostro.statusDebuff['ataque']) {
                this.geradorTextoStore.gerarLog('Seu ATAQUE diminuiu em ' + acaoMostro.statusDebuff['ataque'] + ' pontos!!!');
            }
                
            if(acaoMostro.statusDebuff['defesa']) {
                this.geradorTextoStore.gerarLog('Sua DEFESA diminuiu em ' + acaoMostro.statusDebuff['defesa'] + ' pontos!!!');
            }
                
            if(acaoMostro.statusDebuff['esquiva']) {
                this.geradorTextoStore.gerarLog('Sua ESQUIVA diminuiu em ' + acaoMostro.statusDebuff['esquiva'] + ' pontos!!!');
            }
        }
    }

    calcularCombateMonstro(){
        const { monstro } = this.monstrosStore;
        const acaoMostro = monstro.realizarAcao();
        let esquivaTotal = this.jogador.status.esquiva + (this.jogador.status.esquiva * (this._getRandomNumber(3) + 1));
        let esquivaDefinitiva = this.jogador.esquivou ? esquivaTotal : this.jogador.status.esquiva;

        this.geradorTextoStore.gerarLog(monstro.descricao + ' usa ' + acaoMostro.descricao + ' em você!');

        if (esquivaDefinitiva < this._getRandomNumber(99) + 1) {
            let ataqueJD = monstro.status.ataque - this.jogador.status.defesa;
            let danoTotal = 0;

            if (ataqueJD > 0) {
                danoTotal = acaoMostro.dano ? Math.floor((ataqueJD / (this._getRandomNumber(3) + 1)) + acaoMostro.dano) : 0;
                this.geradorTextoStore.gerarLog('Você recebeu '+ danoTotal +' de dano!!!');
            } else {
                this.geradorTextoStore.gerarLog('Sua defesa reduziu o ataque do monstro para 0 de dano!!!');
            }
            this.jogador.receberAcaoMonstro(acaoMostro, danoTotal);
            this.logConsequencias(acaoMostro);
        } else {
            this.jogador.esquivou = false;
            this.jogador.esquivouComSucesso = true;

            this.geradorTextoStore.gerarLog('Você conseguiu se esquivar da ação do monstro, +1 TURNO EXTRA!!!');
        }

        if(this.jogador.esquivou) {
            this.jogador.esquivou = false;
            this.jogador.esquivouComSucesso = false;
            this.geradorTextoStore.gerarLog('Você não conseguiu se esquivar!!!');
        }
    }

    combateComMonstro(indexAcao) {
        const { monstro } = this.monstrosStore;
        this.calculoCombateJogador(indexAcao);

        if (!monstro.monstroMorreu) {
            if(this.jogador.esquivouComSucesso) {
                this.jogador.esquivouComSucesso = false;
                this.geradorTextoStore.gerarLog('TURNO EXTRA!!!');
            } else {
                this.calcularCombateMonstro();
            }

            if (this.jogador.jogadorMorreu) {
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
            if (this.jogador.encontrouMonstro) {
                this.combateComMonstro(indexAcao);
                return;
            } else {
                const consequencia = this.faseAtual.resultados[indexAcao];
                this.jogador.lidarComConsequencia(consequencia);
                this.geradorTextoStore.gerarLog('RESULTADO: ' + consequencia.descricao); //LOG {Escolha}

                if (this.jogador.encontrouMonstro && this.monstrosStore.existeMonstros) {
                    this.monstrosStore.chamarMonstro();
                    return;
                } else if (consequencia == 'ENCONTRO_MONSTRO') {
                    this.jogador.encontrouMonstro = false;
                    this.geradorTextoStore.semMonstrosDefinitivo(); //LOG {Sem Monstros}
                }

                if (this.jogador.jogadorMorreu) {
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
            if (this.indexfaseAtual < this.fasesCalabouco.length) {
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