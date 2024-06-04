import global from '../utils/global';
import GeradorTextoStore from './geradorTextoStore';
import Monstro from '../utils/Monstro';

class MonstrosStore {
    geradorTextoStore = new GeradorTextoStore();
    qtdMonstrosTotais = 1;
    qtdMonstrosETotais = 1;
    monstrosCalabouco = [];
    monstro = new Monstro();
    monstroIndex = undefined;
    especial = false;

    constructor(geradorTextoStore, qtdMonstrosTotais, qtdMonstrosETotais, especial) {
        this.geradorTextoStore = geradorTextoStore;
        this.qtdMonstrosTotais = qtdMonstrosTotais;
        this.qtdMonstrosETotais = qtdMonstrosETotais;
        this.especial = especial;
    }

    _getRandomNumber(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

    _indexValido(index, indexMaximo) {
        let indexFinal = index;
        if(index > indexMaximo || index < 0 || index === undefined) {
            indexFinal = this._getRandomNumber(indexMaximo);
        }

        return indexFinal;
    }

    _criarMonstro(tipo, indexMonstro) {
        try {
            if(tipo === 'NORMAL') {

                indexMonstro = this._indexValido(indexMonstro, global.monstros.length);
                const monstro = new Monstro(structuredClone(global.monstros[indexMonstro]));
                this.monstrosCalabouco.push(monstro);
            } else if (tipo === 'ESPECIAL') {
    
                indexMonstro = this._indexValido(indexMonstro, global.monstrosEspeciais.length);
                const monstro = new Monstro(structuredClone(global.monstrosEspeciais[indexMonstro]));
                this.monstrosCalabouco.push(monstro);
            }
        } catch (error) {
            console.log(error, 'Erro ao gerar monstro!');
        }
    }

    _gerarMonstros() {
        try {
            for (let index = 0; index < this.qtdMonstrosTotais; index++) {
                this._criarMonstro('NORMAL');
            }

            if(this.especial) {
                for (let index = 0; index < this.qtdMonstrosETotais; index++) {
                    this._criarMonstro('ESPECIAL');
                }
            }
        } catch (error) {
            console.log(error, 'Erro ao gerar monstros!');
        }
    }

    chamarMonstro() {
        if(this.monstrosCalabouco.length) {
            this.monstroIndex = this._getRandomNumber(this.monstrosCalabouco.length);
            this.monstro = this.monstrosCalabouco[this.monstroIndex];

            this.geradorTextoStore.gerarLog(this.monstro.descricao + ' Surgiu!');  //LOG {Monstro}
            this.geradorTextoStore.descricaoPorChatgpt(this.monstro.descricaoDetalhada()); //LOG {Monstro Descricao}
        }
    }

    matarMonstro() {
        if(this.monstroIndex !== undefined) {
            this.monstrosCalabouco.splice(this.monstroIndex, 1);
            this.monstro = new Monstro();
            this.monstroIndex = undefined;
        }

        if(!this.monstrosCalabouco.length) {
            this._criarMonstro('ESPECIAL', 0); // O monstro especial 0(Morte) é criado quando não há monstros no calabouço, independente de 'monstros especiais' ter sido marcado ou não na tela de dificuldade.
            this.geradorTextoStore.semMonstros();
        }
    }

    sumirMonstro() {
        if(this.monstroIndex !== undefined) {
            this.monstro = new Monstro();
            this.monstroIndex = undefined;
        }
    }

    get existeMonstros() {
        return this.monstrosCalabouco.length;
    }

    get getMonstro() {
        return this.monstro;
    } 
}

export default MonstrosStore;