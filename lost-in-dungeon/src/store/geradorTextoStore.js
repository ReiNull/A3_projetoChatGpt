class GeradorTextoStore {
    logCompleto;

    constructor() {
        this.inicializador = this.inicializador.bind(this);
        this.gerarTextoAleatorio = this.gerarTextoAleatorio.bind(this);
        this.gerarResultadoSala = this.gerarResultadoSala.bind(this);
    }

    inicializador(salaDescricao) {
        return this.gerarTextoAleatorio('VOCE ADENTRA NO CALABOUÇO PERDIDO EM BUSCA DE MORTE E SANGUE!!! \n', salaDescricao);
    }

    gerarTextoAleatorio(logCompleto, salaDescricao) {
        const novoTexto = logCompleto + ' ||' + salaDescricao + '||'; 
        return novoTexto;
    }

    gerarResultadoSala(logCompleto, indexAcao, salaResultado) {
        debugger;
        const novoTexto = logCompleto + ' //' + salaResultado[indexAcao] + '//'; 
        return novoTexto;
    }
}

export default GeradorTextoStore;