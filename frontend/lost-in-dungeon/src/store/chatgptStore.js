import chatgptService from '../services/chatgptService';

class ChatgptStore {
    loading = false;

    constructor() {
        this.retornarDescricao = this.retornarDescricao.bind(this);
    }

    retornarDescricao(texto, callback) {

        this.loading = true;
        chatgptService.descreverTexto(texto)
        .then(res=> {

            this.loading = false;
            callback && callback(res.data);
        }).catch(error=>{

            this.loading = false;
            console.log(error);
        })
    }
}

export default ChatgptStore;