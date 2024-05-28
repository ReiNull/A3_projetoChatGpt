import constantes from '../utils/constantes';
import Item from './Item'

class Jogador {
    status = {
        vida: 0,
        ataque: 0,
        defesa: 0,
        esquiva: 0,
    };

    inventario = [];

    item;

    encontrouMonstro = false;
    jogadorMorreu = false;

    constructor() {
        this.item = new Item();
        this.statusOriginal = structuredClone(constantes.jogador.status);
        this.status = structuredClone(constantes.jogador.status);
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
        this.inventario.push(novoItem);

        this.atualizarStatus();        
    }

    lidarComConsequencia(consequencia) {
        if(consequencia.resultado === 'PERDER_VIDA') {
            this.receberDano(1);
        } else if(consequencia.resultado === 'GANHAR_VIDA') {
            this.ganharVida(1);
        } else if(consequencia.resultado === 'ENCONTRO_MONSTRO') {
            this.encontrouMonstro = true;
        } else if(consequencia.resultado === 'GANHAR_ITEM'){
            this.ganharItem();
        }
    }

    receberAcaoMonstro(acaoMostro) {
        this.status.vida -= acaoMostro.dano;
        if(acaoMostro.statusDebuff) {
            this.status.ataque -= acaoMostro.statusDebuff['ataque'] ? acaoMostro.statusDebuff['ataque'] : 0;
            this.status.defesa -= acaoMostro.statusDebuff['defesa'] ? acaoMostro.statusDebuff['defesa'] : 0;
            this.status.esquiva -= acaoMostro.statusDebuff['esquiva'] ? acaoMostro.statusDebuff['esquiva'] : 0;
        }
        this.jogadorMorreu = this.status.vida <= 0;
    }

    atualizarStatus() {
        this.status = structuredClone(this.statusOriginal);

        this.inventario.forEach(item => {
            let ataqueBonus = item.status.ataque || 0;
            let defesaBonus = item.status.defesa || 0;
    
            this.status.ataque += ataqueBonus;
            this.status.defesa += defesaBonus;
        });
    }
}

export default Jogador;