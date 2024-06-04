import global from './global';
import GeradorTextoStore from '../store/geradorTextoStore';
import Item from './Item'

class Jogador {
    status = {
        vida: 0,
        ataque: 0,
        defesa: 0,
        esquiva: 0,
    };
    inventario = [];
    item = new Item();
    encontrouMonstro = false;
    jogadorMorreu = false;
    esquivou = false;
    esquivouComSucesso = false;
    geradorTextoStore = new GeradorTextoStore();

    constructor(geradorTextoStore) {
        this.geradorTextoStore = geradorTextoStore;

        this.statusOriginal = structuredClone(global.jogador.status);
        this.status = structuredClone(global.jogador.status);
    }

    receberDano(dano) {
        this.status.vida -= dano
        this.jogadorMorreu = this.status.vida <= 0;
    }

    ganharVida(vida) {
        this.status.vida += vida;
    }

    ganharItem() {
        const novoItem = this.item.carregarItemAleatorio();

        //this.geradorTextoStore.descricaoPorChatgpt(novoItem.descricaoChatGpt);
        this.geradorTextoStore.gerarLog('Você adiciona ' + novoItem.descricao + ' ao seu inventário!');
        this.inventario.push(novoItem);
        this.atualizarStatus();        
    }

    lidarComConsequencia(consequencia) {
        if(consequencia.resultado === 'PERDER_VIDA') {
            this.receberDano(4);
        } else if(consequencia.resultado === 'GANHAR_VIDA') {
            this.ganharVida(4);
        } else if(consequencia.resultado === 'ENCONTRO_MONSTRO') {
            this.encontrouMonstro = true;
        } else if(consequencia.resultado === 'GANHAR_ITEM'){
            this.ganharItem();
        }
    }

    receberAcaoMonstro(acaoMostro, dano) {
        this.status.vida -= dano;
        if(acaoMostro.statusDebuff) {
            this.status.ataque -= acaoMostro.statusDebuff['ataque'] ? acaoMostro.statusDebuff['ataque'] : 0;
            this.status.defesa -= acaoMostro.statusDebuff['defesa'] ? acaoMostro.statusDebuff['defesa'] : 0;
            this.status.esquiva -= acaoMostro.statusDebuff['esquiva'] ? acaoMostro.statusDebuff['esquiva'] : 0;
        }
        this.jogadorMorreu = this.status.vida <= 0 || this.status.ataque <= -50 || this.status.defesa <= -50 || this.status.esquiva <= -50;
    }

    atualizarStatus() {
        const vidaAtual = this.status.vida;
        this.status = structuredClone(this.statusOriginal);
        this.status.vida = vidaAtual;

        this.inventario.forEach(item => {
            let ataqueBonus = item.status.ataque || 0;
            let defesaBonus = item.status.defesa || 0;
    
            this.status.ataque += ataqueBonus;
            this.status.defesa += defesaBonus;
        });
    }
}

export default Jogador;