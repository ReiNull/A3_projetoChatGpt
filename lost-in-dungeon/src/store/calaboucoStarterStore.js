import constantes from '../utils/constantes';

class CalaboucoStarterStore {
    salasCalabouco = [];
    salaAtual = {};

    constructor(qtdSalas) {
        this.gerarSalas(qtdSalas);
        this.carregarSala(0);

        this.gerarSalas = this.gerarSalas.bind(this);
        this.carregarSala = this.carregarSala.bind(this);
        this.acoesSala = this.acoesSala.bind(this);
    }

    getRandomNumber(numeroMaximo) {
        return Math.floor(Math.random() * numeroMaximo);
    }

    gerarSalas(quantidade) {
        for (let index = 0; index < quantidade; index++) {
            const salaAleatoria = this.getRandomNumber(constantes.fases.length);
            this.salasCalabouco.push(constantes.fases[salaAleatoria]);
        }
    }

    carregarSala(indexSala) {
        if(indexSala <= this.salasCalabouco.length) {
            this.salaAtual = this.salasCalabouco[indexSala];
        }
    }

    acoesSala() {
        return this.salaAtual && this.salaAtual.escolhas;
    }
}

export default CalaboucoStarterStore;