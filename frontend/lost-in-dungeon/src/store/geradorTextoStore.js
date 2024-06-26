import logsDefault from "../utils/logsDefault";
import ChatgptStore from './chatgptStore';

class GeradorTextoStore {
    chatgptStore = new ChatgptStore();
    
    constructor() {
        this.state = {
            logCompleto: "",
            carregando: false
        };
        this.listeners = [];

        this.inicializador = this.inicializador.bind(this);
        this.gerarLog = this.gerarLog.bind(this);
        this.gerouCalabouco = this.gerouCalabouco.bind(this);
        this.descricaoPorChatgpt = this.descricaoPorChatgpt.bind(this);
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    unsubscribe(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }

    setLogCompleto(newLog) {
        this.state.logCompleto = newLog;
        this.notify();
    }

    setCarregando(isLoading) {
        this.state.carregando = isLoading;
        this.notify();
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }

    getState() {
        return this.state;
    }

    inicializador(salaDescricao) {
        return this.gerarLog(logsDefault.LOGS.calabouco_gerado, salaDescricao);
    }

    gerarLog(log) {
        const novoTexto = this.state.logCompleto + log + '\n';
        this.setLogCompleto(novoTexto);
    }

    gerouCalabouco() {
        const novoTexto = this.state.logCompleto + logsDefault.LOGS.calabouco_gerado + '\n'; 
        this.setLogCompleto(novoTexto);
    }

    jogadorMorreu() {
        this.gerarLog(logsDefault.LOGS.jogador_morre);
    }

    jogadorEscapou() {
        this.gerarLog(logsDefault.LOGS.jogador_escapa_calabouco);
    }

    descricaoPorChatgptSala(texto) {
        this.setCarregando(true);
        this.chatgptStore.retornarDescricao(texto, res => {
            this.gerarLog('SALA: ' + res);
            this.setCarregando(false);
        });
    }

    descricaoPorChatgpt(texto) {
        this.setCarregando(true);
        this.chatgptStore.retornarDescricao(texto, res => {
            this.gerarLog(res);
            this.setCarregando(false);
        });
    }

    semMonstros() {
        this.gerarLog(logsDefault.LOGS.sem_monstros);
    }

    semMonstrosDefinitivo() {
        this.gerarLog(logsDefault.LOGS.sem_monstros_definitivo);
    }
}

export default GeradorTextoStore;
