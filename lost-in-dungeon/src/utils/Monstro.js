class Monstro {
    status = '**NULL**';
    descricao = '**NULL**';
    descricaoChatGpt = '**NULL**';
    caracteristicas = '**NULL**';
    acoes = '**NULL**';

    monstroMorreu = false;

    constructor() {
        this.getRandomAcao = this.getRandomAcao.bind(this);
    }

    getRandomAcao() {
        return Math.floor(Math.random() * this.acoes.length);
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