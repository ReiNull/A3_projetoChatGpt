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
            const referenciaFase = structuredClone(constantes.fases[index]);

            this.descricao = referenciaFase.descricao;
            this.descricaoChatGpt = referenciaFase.descricaoChatGpt;
            this.escolhas = referenciaFase.escolhas;
            this.resultados = referenciaFase.resultados;
        } else {
            console.log('Index está além do que existe disponível para fases');
        }
    }

    carregarFaseAleatoria() {
        const faseAleatoria = this.getRandomNumber();

        if(faseAleatoria < constantes.fases.length) {
            const referenciaFase = structuredClone(constantes.fases[faseAleatoria]);

            this.descricao = referenciaFase.descricao;
            this.descricaoChatGpt = referenciaFase.descricaoChatGpt;
            this.escolhas = referenciaFase.escolhas;
            this.resultados = referenciaFase.resultados;
        } else {
            console.log('Index está além do que existe disponível para fases');
        }
    }
}

export default Fase;