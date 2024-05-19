import logsDefault from "../utils/logsDefault";
class GeradorTextoStore {
    logCompleto = '';

    constructor() {
        this.inicializador = this.inicializador.bind(this);
        this.gerarTextoAleatorio = this.gerarTextoAleatorio.bind(this);
        this.gerarResultadoSala = this.gerarResultadoSala.bind(this);
        this.gerarLog = this.gerarLog.bind(this);
        this.gerouCalabouco = this.gerouCalabouco.bind(this);
    }

    inicializador(salaDescricao) {
        return this.gerarLog(logsDefault.LOGS.calabouco_gerado, salaDescricao);
    }

    gerarLog(log) {
        const novoTexto = this.logCompleto + ' ||' + log + '||';
        this.logCompleto = novoTexto;
    }

    gerouCalabouco() {
        const novoTexto = this.logCompleto + ' ||' + logsDefault.LOGS.calabouco_gerado + '||'; 
        this.logCompleto = novoTexto;
    }

    gerarTextoAleatorio(logCompleto, salaDescricao) {
        const novoTexto = logCompleto + ' ||' + salaDescricao + '||'; 
        return novoTexto;
    }

    gerarResultadoSala(logCompleto, indexAcao, salaResultado) {
        const novoTexto = logCompleto + ' //' + salaResultado[indexAcao] + '//'; 
        return novoTexto;
    }

    get getLogCompleto() {
        return this.logCompleto;
    }
}

export default GeradorTextoStore;