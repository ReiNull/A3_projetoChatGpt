import logsDefault from "../utils/logsDefault";
import ChatgptStore from './chatgptStore';

class GeradorTextoStore {
    chatgptStore = new ChatgptStore();
    
    constructor() {
        this.state = {
            logCompleto: ""
        };
        this.listeners = [];

        this.inicializador = this.inicializador.bind(this);
        this.gerarLog = this.gerarLog.bind(this);
        this.gerouCalabouco = this.gerouCalabouco.bind(this);
        this.monstroChamado = this.monstroChamado.bind(this);
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
        const novoTexto = this.state.logCompleto + ' ||' + log + '||';
        this.setLogCompleto(novoTexto); // Atualiza o estado e notifica os ouvintes
    }

    gerouCalabouco() {
        const novoTexto = this.state.logCompleto + ' ||' + logsDefault.LOGS.calabouco_gerado + '||'; 
        this.setLogCompleto(novoTexto); // Atualiza o estado e notifica os ouvintes
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
        });
    }

    semMonstros() {
        this.gerarLog(logsDefault.LOGS.sem_monstros);
    }

    semMonstrosDefinitivo() {
        this.gerarLog(logsDefault.LOGS.sem_monstros_definitivo);
    }

    get getLogCompleto() {
        return this.descricaoCarregando ? 'Carregando' : this.state.logCompleto;
    }

    get descricaoCarregando() {
        return this.chatgptStore.loading;
    }
}

export default GeradorTextoStore;
