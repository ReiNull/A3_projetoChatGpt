import global from './global';
import Jogador from './Jogador';

class Item {
    descricao = '**NULL**';
    descricaoChatGpt = '**NULL**';
    status = '**NULL**';


    getRandomNumber() {
        return Math.floor(Math.random() * global.items.length);
    }

    carregarItemAleatorio() {
        const itemAleatorio = this.getRandomNumber()

        if (itemAleatorio < global.items.length) {
            let item = global.items[itemAleatorio];

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