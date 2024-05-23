import logsDefault from "../utils/logsDefault";
class GeradorTextoStore {
    logCompleto = '';

    constructor() {
        this.inicializador = this.inicializador.bind(this);
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

    jogadorMorreu() {
        return this.gerarLog(logsDefault.LOGS.jogador_morre);
    }

    jogadorEscapou() {
        return this.gerarLog(logsDefault.LOGS.jogador_escapa_calabouco);
    }

    get getLogCompleto() {
        return this.logCompleto;
    }
}

export default GeradorTextoStore;