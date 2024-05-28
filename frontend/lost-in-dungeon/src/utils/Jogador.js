import constantes from '../utils/constantes';

class Jogador {
    status = {
        vida: 0,
        ataque: 0,
        defesa: 0,
        esquiva: 0,
    };
    encontrouMonstro = false;
    jogadorMorreu = false;

    constructor() {
        this.status = constantes.jogador.status;
    }

    receberDano(dano) {
        this.status.vida -= dano
        this.jogadorMorreu = this.status.vida <= 0;
    }

    ganharVida(vida) {
        this.status.vida += vida;
    }

    lidarComConsequencia(consequencia) {
        if(consequencia.resultado === 'PERDER_VIDA') {
            this.receberDano(1);
        } else if(consequencia.resultado === 'GANHAR_VIDA') {
            this.ganharVida(1);
        } else if(consequencia.resultado === 'ENCONTRO_MONSTRO') {
            this.encontrouMonstro = true;
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
}

export default Jogador;