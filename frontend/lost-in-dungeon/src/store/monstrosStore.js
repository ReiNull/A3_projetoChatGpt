import constantes from '../utils/constantes';
import GeradorTextoStore from './geradorTextoStore';
import Monstro from '../utils/Monstro';

class MonstrosStore {
    geradorTextoStore = new GeradorTextoStore();
    qtdMonstrosTotais = 1;
    monstrosCalabouco = [];
    monstro = new Monstro();
    monstroIndex = undefined;

    constructor(geradorTextoStore, qtdMonstrosTotais) {
        this.geradorTextoStore = geradorTextoStore;
        this.qtdMonstrosTotais = qtdMonstrosTotais;
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

    _criarMonstro(tipo, indexMonstro) {
        try {
            if(tipo == 'NORMAL') {

                indexMonstro = this._indexValido(indexMonstro, constantes.monstros.length);
                const monstro = new Monstro(structuredClone(constantes.monstros[indexMonstro]));
                this.monstrosCalabouco.push(monstro);
            } else if (tipo == 'ESPECIAL') {
    
                indexMonstro = this._indexValido(indexMonstro, constantes.monstrosEspeciais.length);
                const monstro = new Monstro(structuredClone(constantes.monstrosEspeciais[indexMonstro]));
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
            //this._criarMonstro('ESPECIAL');
            console.log(this.monstrosCalabouco);
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
        if(this.monstroIndex != undefined) {
            this.monstrosCalabouco.splice(this.monstroIndex, 1);
            this.monstro = new Monstro();
            this.monstroIndex = undefined;
        }

        if(!this.monstrosCalabouco.length) {
            this._criarMonstro('ESPECIAL', 0);
            this.geradorTextoStore.semMonstros();
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