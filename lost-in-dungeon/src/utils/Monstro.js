import constantes from '../utils/constantes';
class Monstro {
    status = '**NULL**';
    descricao = '**NULL**';
    descricaoChatGpt = '**NULL**';
    caracteristicas = '**NULL**';
    acoes = '**NULL**';

    nasceu = false;
    monstroMorreu = false;

    constructor() {
        this.getRandomAcao = this.getRandomAcao.bind(this);
    }

    getRandomAcao() {
        return Math.floor(Math.random() * this.acoes.length);
    }

    getRandomCaracteristica(indexMonstro) {
        return Math.floor(Math.random() * constantes.monstros[indexMonstro].caracteristicas.length);
    }

    nascer(indexMonstro) {
        if(indexMonstro < constantes.monstros.length) {
            const referenciaMonstro = structuredClone(constantes.monstros[indexMonstro]);

            this.src               = referenciaMonstro.src;
            this.status            = referenciaMonstro.status;
            this.descricao         = referenciaMonstro.descricao;
            this.descricaoChatGpt  = referenciaMonstro.descricaoChatGpt;
            this.caracteristicas   = referenciaMonstro.caracteristicas[this.getRandomCaracteristica(indexMonstro)];
            this.acoes             = referenciaMonstro.acoesMonstro;
            this.nasceu            = true;
        } else {
            console.log('Index está além do que existe disponível para monstros');
        }
    }

    nascerEspecial(indexMonstro) {
        if(indexMonstro < constantes.monstros.length) {
            const referenciaMonstro = structuredClone(constantes.monstrosEspeciais[indexMonstro]);

            this.src               = referenciaMonstro.src;
            this.status            = referenciaMonstro.status;
            this.descricao         = referenciaMonstro.descricao;
            this.descricaoChatGpt  = referenciaMonstro.descricaoChatGpt;
            this.caracteristicas   = referenciaMonstro.caracteristicas[this.getRandomCaracteristica(indexMonstro)];
            this.acoes             = referenciaMonstro.acoesMonstro;
            this.nasceu            = true;
        } else {
            console.log('Index está além do que existe disponível para monstros');
        }
    }

    realizarAcao() {
        return this.acoes[this.getRandomAcao()];
    }

    receberDano(dano) {
        this.status.vida -= dano
        this.monstroMorreu = this.status.vida <= 0;
    }
}

export default Monstro;