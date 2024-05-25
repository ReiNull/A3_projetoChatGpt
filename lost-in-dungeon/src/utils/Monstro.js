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
            this.src               = constantes.monstros[indexMonstro].src;
            this.status            = constantes.monstros[indexMonstro].status;
            this.descricao         = constantes.monstros[indexMonstro].descricao;
            this.descricaoChatGpt  = constantes.monstros[indexMonstro].descricaoChatGpt;
            this.caracteristicas   = constantes.monstros[indexMonstro].caracteristicas[this.getRandomCaracteristica(indexMonstro)];
            this.acoes             = constantes.monstros[indexMonstro].acoesMonstro;
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