import axios from "axios";

class ChatgptService {

    descreverTexto(texto) {
        return axios.post("http://localhost:4000/pergunte-ao-chatgpt",{ prompt: texto });
    }
}


export default new ChatgptService();