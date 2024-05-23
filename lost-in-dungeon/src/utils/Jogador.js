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
        if(consequencia == 'PERDER_VIDA') {
            this.receberDano(1);
        } else if(consequencia == 'GANHAR_VIDA') {
            this.ganharVida(1);
        }
    }

}

export default Jogador;