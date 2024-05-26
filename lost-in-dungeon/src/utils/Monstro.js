import constantes from '../utils/constantes';
class Monstro {
    status = '**NULL**';
    descricao = '**NULL**';
    descricaoChatGpt = '**NULL**';
    caracteristicas = '**NULL**';
    acoes = '**NULL**';

    nasceu = false;
    monstroMorreu = false;

    constructor(referenciaMonstro) {
        if(referenciaMonstro) {
            this._carregarInformacoes(referenciaMonstro);
        }
        
        this._carregarInformacoes = this._carregarInformacoes.bind(this);
    }

    _getRandomNumber(maxNum) {
        return Math.floor(Math.random() * maxNum);
    }

    _carregarInformacoes(referenciaMonstro) {
        this.src               = referenciaMonstro.src;
        this.status            = referenciaMonstro.status;
        this.descricao         = referenciaMonstro.descricao;
        this.descricaoChatGpt  = referenciaMonstro.descricaoChatGpt;
        this.caracteristicas   = referenciaMonstro.caracteristicas[this._getRandomNumber(referenciaMonstro.caracteristicas.length)];
        this.acoes             = referenciaMonstro.acoesMonstro;
        this.nasceu            = true;
    }

    realizarAcao() {
        return this.acoes[this._getRandomNumber(this.acoes.length)];
    }

    receberDano(dano) {
        this.status.vida -= dano
        this.monstroMorreu = this.status.vida <= 0;
    }
}

export default Monstro;