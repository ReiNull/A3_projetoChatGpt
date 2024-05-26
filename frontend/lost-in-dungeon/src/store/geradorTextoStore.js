import logsDefault from "../utils/logsDefault";
import ChatgptStore from './chatgptStore';
class GeradorTextoStore {
    logCompleto = '';
    chatgptStore = new ChatgptStore();

    constructor() {
        this.inicializador = this.inicializador.bind(this);
        this.gerarLog = this.gerarLog.bind(this);
        this.gerouCalabouco = this.gerouCalabouco.bind(this);
        this.monstroChamado = this.monstroChamado.bind(this);
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
        this.gerarLog(logsDefault.LOGS.jogador_morre);
    }

    jogadorEscapou() {
        this.gerarLog(logsDefault.LOGS.jogador_escapa_calabouco);
    }

    monstroChamado(texto) {
        this.chatgptStore.retornarDescricao(texto, res => {

            this.gerarLog(res);
            console.log(this.logCompleto);
        });
    }

    semMonstros() {
        this.gerarLog(logsDefault.LOGS.sem_monstros);
    }

    semMonstrosDefinitivo() {
        this.gerarLog(logsDefault.LOGS.sem_monstros_definitivo);
    }

    get getLogCompleto() {
        return this.descricaoCarregando ? 'Carregando' : this.logCompleto;
    }

    get descricaoCarregando() {
        return this.chatgptStore.loading;
    }
}

export default GeradorTextoStore;