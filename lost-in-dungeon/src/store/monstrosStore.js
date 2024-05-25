import constantes from '../utils/constantes';
import Monstro from '../utils/Monstro';

class MonstrosStore {
    qtdMonstrosTotais = 4;
    monstrosCalabouco = [];
    monstro = new Monstro();
    monstroIndex = undefined;

    getRandomNumber(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

    _gerarMonstros() {
        try {
            //Gera as fases do calabouço baseado na quantidade totais de fases informadas.
            for (let index = 0; index < this.qtdMonstrosTotais; index++) {
                const monstroNovo = new Monstro();
                monstroNovo.nascer(this.getRandomNumber(constantes.monstros.length));
                this.monstrosCalabouco.push(monstroNovo);
            }

            const monstroNovo = new Monstro();
            monstroNovo.nascerEspecial(this.getRandomNumber(constantes.monstrosEspeciais.length));
            this.monstrosCalabouco.push(monstroNovo);
        } catch (error) {
            console.log(error, 'Erro ao gerart monstros!');
        }
    }

    chamarMonstro() {
        this.monstroIndex = this.getRandomNumber(this.monstrosCalabouco.length);
        this.monstro = this.monstrosCalabouco[this.monstroIndex];
        console.log(this.monstro);
    }

    matarMonstro() {
        if(this.monstroIndex != undefined) {
            this.monstrosCalabouco.splice(this.monstroIndex, 1);
            this.monstro = new Monstro();
            this.monstroIndex = undefined;
        }
    }

    get getMonstro() {
        return this.monstro;
    } 
}

export default MonstrosStore;