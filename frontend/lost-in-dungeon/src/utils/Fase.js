import global from './global';

class Fase {
    descricao = '**NULL**';
    descricaoChatGpt= '**NULL**';
    escolhas= '**NULL**';
    resultados= '**NULL**';

    constructor(referenciaFase) {
        if(referenciaFase) {
            this._carregarInformacoes(referenciaFase);
        }

        this._carregarInformacoes = this._carregarInformacoes.bind(this);
    }

    _carregarInformacoes(referenciaFase) {
        this.descricao          = referenciaFase.descricao;
        this.descricaoChatGpt   = referenciaFase.descricaoChatGpt;
        this.escolhas           = referenciaFase.escolhas;
        this.resultados         = referenciaFase.resultados;
    }
}

export default Fase;