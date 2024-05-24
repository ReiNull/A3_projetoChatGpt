import constantes from '../utils/constantes';
import Monstro from '../utils/Monstro';

class MonstrosStore {
    qtdMonstrosTotais = 4;
    monstrosCalabouco = [];
    monstro = new Monstro();

    constructor(qtdMonstros) {
        //this.qtdMonstrosTotais = qtdMonstros;

        this._gerarMonstros();
    }

    getRandomNumber(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

    getRandomCaracteristica(indexMonstro) {
        return Math.floor(Math.random() * constantes.monstros[indexMonstro].caracteristicas.length);
    }

    _gerarMonstros() {
        try {
            //Gera as fases do calabouço baseado na quantidade totais de fases informadas.
            for (let index = 0; index < this.qtdMonstrosTotais; index++) {
                const monstroAleatorio = this.getRandomNumber(constantes.monstros.length);
                if(monstroAleatorio < constantes.monstros.length) {
                    const monstroNovo = new Monstro();
                    monstroNovo.status            = constantes.monstros[monstroAleatorio].status;
                    monstroNovo.descricao         = constantes.monstros[monstroAleatorio].descricao;
                    monstroNovo.descricaoChatGpt  = constantes.monstros[monstroAleatorio].descricaoChatGpt;
                    monstroNovo.caracteristicas   = constantes.monstros[monstroAleatorio].caracteristicas[this.getRandomCaracteristica(monstroAleatorio)];
                    monstroNovo.acoes             = constantes.monstros[monstroAleatorio].acoesMonstro;
                    
                    this.monstrosCalabouco.push(monstroNovo);
                } else {
                    console.log('Index está além do que existe disponível para monstros');
                }
            }
        } catch (error) {
            console.log(error, 'Erro ao gerart monstros!');
        }
    }

    chamarMonstro() {
        this.monstro = this.monstrosCalabouco[this.getRandomNumber(this.qtdMonstrosTotais)];
    }
}

export default MonstrosStore;