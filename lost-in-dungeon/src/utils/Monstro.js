import constantes from '../utils/constantes';

class Monstro {
    status = '**NULL**';
    descricao = '**NULL**';
    descricaoChatGpt = '**NULL**';
    caracteristicas = '**NULL**';
    acoes = '**NULL**';

    monstroMorreu = false;

    constructor() {
        this.getRandomNumber = this.getRandomNumber.bind(this);
        this.getRandomCaracteristica = this.getRandomCaracteristica.bind(this);
        // this.carregarFase = this.carregarFase.bind(this);
        this.carregarMonstroAleatorio = this.carregarMonstroAleatorio.bind(this);
    }

    getRandomNumber() {
        return Math.floor(Math.random() * constantes.monstros.length);
    }

    getRandomCaracteristica(indexMonstro) {
        return Math.floor(Math.random() * constantes.monstros[indexMonstro].caracteristicas.length);
    }

    getRandomAcao() {
        return Math.floor(Math.random() * this.acoes.length);
    }

    // carregarFase(index) {
    //     if(index < constantes.fases.length) {
    //         this.descricao = constantes.fases[index].descricao;
    //         this.descricaoChatGpt = constantes.fases[index].descricaoChatGpt;
    //         this.escolhas = constantes.fases[index].escolhas;
    //         this.resultados = constantes.fases[index].resultados;
    //     } else {
    //         console.log('Index está além do que existe disponível para fases');
    //     }
    // }

    carregarMonstroAleatorio() {
        const monstroAleatorio = this.getRandomNumber();
        if(monstroAleatorio < constantes.monstros.length) {
            this.status            = constantes.monstros[monstroAleatorio].status;
            this.descricao         = constantes.monstros[monstroAleatorio].descricao;
            this.descricaoChatGpt  = constantes.monstros[monstroAleatorio].descricaoChatGpt;
            this.caracteristicas   = this.getRandomCaracteristica(monstroAleatorio);
            this.acoes             = constantes.monstros[monstroAleatorio].acoesMonstro;
            
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