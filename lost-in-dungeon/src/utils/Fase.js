import constantes from '../utils/constantes';

class Fase {
    descricao = '**NULL**';
    descricaoChatGpt= '**NULL**';
    escolhas= '**NULL**';
    resultados= '**NULL**';

    constructor() {
        this.getRandomNumber = this.getRandomNumber.bind(this);
        this.carregarFase = this.carregarFase.bind(this);
        this.carregarFaseAleatoria = this.carregarFaseAleatoria.bind(this);
    }

    getRandomNumber() {
        return Math.floor(Math.random() * constantes.fases.length);
    }

    carregarFase(index) {
        if(index < constantes.fases.length) {
            this.descricao = constantes.fases[index].descricao;
            this.descricaoChatGpt = constantes.fases[index].descricaoChatGpt;
            this.escolhas = constantes.fases[index].escolhas;
            this.resultados = constantes.fases[index].resultados;
        } else {
            console.log('Index está além do que existe disponível para fases');
        }
    }

    carregarFaseAleatoria() {
        const faseAleatoria = this.getRandomNumber();

        if(faseAleatoria < constantes.fases.length) {
            this.descricao = constantes.fases[faseAleatoria].descricao;
            this.descricaoChatGpt = constantes.fases[faseAleatoria].descricaoChatGpt;
            this.escolhas = constantes.fases[faseAleatoria].escolhas;
            this.resultados = constantes.fases[faseAleatoria].resultados;
        } else {
            console.log('Index está além do que existe disponível para fases');
        }
    }
}

export default Fase;