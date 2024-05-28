import constantes from '../utils/constantes';
import Jogador from './Jogador';

class Item {
    descricao = '**NULL**';
    descricaoChatGpt = '**NULL**';
    status = '**NULL**';


    getRandomNumber() {
        return Math.floor(Math.random() * constantes.items.length);
    }

    carregarItemAleatorio() {
        const itemAleatorio = this.getRandomNumber()

        if (itemAleatorio < constantes.items.length) {
            let item = constantes.items[itemAleatorio];

            this.descricao = item.descricao;
            this.descricaoChatGpt = item.descricaoChatGpt;
            this.status = item.status;

            return item;
        } else {
            console.log('Sem item para você, fracote!')
        }
    }
}

export default Item;