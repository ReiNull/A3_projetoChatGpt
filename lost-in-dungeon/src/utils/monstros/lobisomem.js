import constantes from '../constantes';

class Lobisomem {
    status = {
        vida: 30,
        ataque: 10,
        defesa: 15,
        esquiva: 15,
    };
    descricao = 'Lobisomem';
    caracteristicas = ['Raivoso', 'Triste', 'Cansado', 'Louco'];
    descricaoChatGpt = 'Me descreva um lobisomem :caracteristica, no máximo 20 palavras, texto corrido';
    acoesMonstro = [
        { descricao: 'Mordida', dano: 5, statusDebuff: '', descricaoChatGpt: 'Descreva um lobisomem me mordendo' },
        { descricao: 'Rosnado', dano: 0, statusDebuff: constantes.STATUS_DEBUFF.menosDano, descricaoChatGpt: 'Descreva um lobisomem rosnando para mim'}
    ];

    constructor() {
        this.ataque = this.ataque.bind(this);
    }

    ataque() {
        return this.acoesMonstro[0];
    }
}

export default Lobisomem;