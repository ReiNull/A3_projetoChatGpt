import Lobisomem from '../img/lobisomem.png';
import EspreitadorVinhas from '../img/monstroPlanta.png';
import Rato from '../img/rato.png';
import Vampiro from '../img/vampiro.png';
import Morte from '../img/morte.png';
import Coelho from '../img/coelho.png';


const constantes = {
    STATUS_DEBUFF: { 
        menosDefesa: 'DEFESA',
        menosDano: 'DANO',
        menosEsquiva: 'ESQUIVA',
    },
    
    // Status do jogador
    jogador: {
        status: {
            vida: 30,
            ataque: 20,
            defesa: 10,
            esquiva: 15,
        }
        //TO DO: inventario que o jogador adquire no calabouço
    },

    //TO DO: Itens dentro do calabouço
    items: [

    ],

    //consequencias: ['PERDER_VIDA', 'GANHAR_VIDA', 'ENCONTRO_MONSTRO', 'GANHAR_ITEM', 'NADA'],

    // Possíveis fases do jogo
    fases: [
        { 
            descricao: 'sala com Baú monstruoso' ,
            descricaoChatGpt: 'Descreva uma sala com Baú monstruoso, no máximo 20 palavras, texto corrido',
            escolhas: {
                '1': 'Abrir Baú',
                '2': 'Chutar Baú',
                '3': 'Se Afastar do Baú',
            },
            resultados: {
                '1': 'PERDER_VIDA',
                '2': 'GANHAR_VIDA',
                '3': 'PERDER_VIDA',
            }
        },
        { 
            descricao: 'Sala com Neblina tendo uma porta no final' ,
            descricaoChatGpt: 'Descreva uma sala assustadora com neblina com uma porta no final, no máximo 20 palavras, texto corrido',
            escolhas: {
                '1': 'Ir até a porta',
                '2': 'Esperar neblina sumir',
            },
            resultados: {
                '1': 'NADA',
                '2': 'ENCONTRO_MONSTRO',
            }
        }
    ],

    //Possíveis monstros que estarão no calabouço
    monstros: [
        { 
            status: {
                vida: 30,
                ataque: 10,
                defesa: 15,
                esquiva: 15,
            },
            descricao: 'O Lobisomem' ,
            caracteristicas: ['Raivoso', 'Triste', 'Cansado', 'Louco'],
            descricaoChatGpt: 'Descreva um lobisomem :caracteristica, no máximo 20 palavras, texto corrido',
            src: Lobisomem,
            acoesMonstro: [
                { descricao: 'Mordida', dano: 15, statusDebuff: null, descricaoChatGpt: 'Descreva um lobisomem me mordendo' },
                { descricao: 'Rosnado', dano: 0, statusDebuff: { ataque: 2, esquiva: 5 }, descricaoChatGpt: 'Descreva um lobisomem rosnando para mim'}
            ],
        },
        { 
            status: {
                vida: 5,
                ataque: 2,
                defesa: 2,
                esquiva: 2,
            },
            descricao: 'O Rato' ,
            caracteristicas: ['Raivoso', 'Triste', 'Cansado', 'Louco'],
            descricaoChatGpt: 'Me descreva um Rato :caracteristica, no máximo 20 palavras, texto corrido',
            src: Rato,
            acoesMonstro: [
                { descricao: 'Mordida', dano: 1, statusDebuff: null, descricaoChatGpt: 'Descreva um Rato me mordendo' },
            ],
        }
    ],

    monstrosEspeciais: [
        { 
            status: {
                vida: 999,
                ataque: 999,
                defesa: 999,
                esquiva: 999,
            },
            descricao: 'A Morte' ,
            caracteristicas: ['Aterrorizante'],
            descricaoChatGpt: 'Me descreva a morte emcapuzada :caracteristica, no máximo 20 palavras, texto corrido',
            src: Morte,
            acoesMonstro: [
                { descricao: 'Matar', dano: 999, statusDebuff: null, descricaoChatGpt: 'Descreva um ceifador colhendo almas' },
            ],
        },
    ]
    
}

export default constantes;