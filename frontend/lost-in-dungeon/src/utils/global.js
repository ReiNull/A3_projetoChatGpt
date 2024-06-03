import Lobisomem from '../img/lobisomem.png';
import EspreitadorVinhas from '../img/monstroPlanta.png';
import Rato from '../img/rato.png';
import Vampiro from '../img/vampiro.png';
import Morte from '../img/morte.png';
import Coelho from '../img/coelho.png';

const padraoChatGpt = ', no presente, no máximo 20 palavras, texto corrido';

const global = {
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
            dano: 5,
            defesa: 10,
            esquiva: 10,
        },
        //TO DO: inventario que o jogador adquire no calabouço
        inventario: []
    },

    //TO DO: Itens dentro do calabouço
    items: [
        {
            descricao: 'Espada Longa',
            descricaoChatGpt: 'Descreva uma espada longa como se fosse um mestre de RPG com no máximo 13 palavras',
            status: {
                ataque: 10,
                defesa: 5
            }
        },
        {
            descricao: 'Espada Curta',
            descricaoChatGpt: 'Descreva uma espada curta como se fosse um mestre de RPG com no máximo 13 palavras',
            status: {
                ataque: 5,
                esquiva: 5
            }
        },
        {
            descricao: 'Arco e Flecha',
            descricaoChatGpt: 'Descreva um arco e flecha como se fosse um mestre de RPG com no máximo 13 palavras',
            status: {
                ataque: 10
            }
        },
        {
            descricao: 'Escudo de Madeira',
            descricaoChatGpt: 'Descreva um escudo de madeira como se fosse um mestre de RPG com no máximo 13 palavras',
            status: {
                ataque: 5,
                defesa: 5
            }
        },
        {
            descricao: 'Armadura',
            descricaoChatGpt: 'Descreva uma armadura como se fosse um mestre de RPG com no máximo 13 palavras',
            status: {
                defesa: 10
            }
        }
    ],

    // Possíveis fases do jogo
    fases: [
        { 
            descricao: 'Sala com Baú monstruoso' ,
            descricaoChatGpt: 'Descreva uma sala com Baú monstruoso' + padraoChatGpt,
            escolhas: {
                '1': 'Abrir Baú',
                '2': 'Chutar Baú',
                '3': 'Se Afastar do Baú',
            },
            resultados: {
                '1': {resultado: 'PERDER_VIDA', descricao: 'O baú morde seu braço!'},
                '2': {resultado: 'GANHAR_ITEM', descricao: 'O baú se abre, você encontrou um item!'},
                '3': {resultado: 'PERDER_VIDA', descricao: 'Ao se afastar o baú acorda e te morde!'},
            }
        },
        { 
            descricao: 'Sala com Neblina tendo uma porta no final' ,
            descricaoChatGpt: 'Descreva uma sala assustadora com neblina com uma porta no final' + padraoChatGpt,
            escolhas: {
                '1': 'Ir até a porta',
                '2': 'Esperar neblina sumir',
            },
            resultados: {
                '1': {resultado: 'NADA', descricao: 'Conseguiu atravessar sem problemas!'},
                '2': {resultado: 'ENCONTRO_MONSTRO', descricao: 'Esperou demais... te encontraram!'},
            }
        },
        { 
            descricao: 'Sala escura' ,
            descricaoChatGpt: 'Descreva uma sala escura com barulhos horripilantes sem fim aparente' + padraoChatGpt,
            escolhas: {
                '1': 'Atravessar Correndo',
                '2': 'Atravessar Andando',
                '3': 'Atravessar Rastejando',
                '4': 'Esperar',
            },
            resultados: {
                '1': {resultado: 'ENCONTRO_MONSTRO', descricao: 'Colidiu com um monstro na escuridão'},
                '2': {resultado: 'ENCONTRO_MONSTRO', descricao: 'Esbarrou em um monstro!'},
                '3': {resultado: 'NADA', descricao: 'Conseguiu passar sem ser notado!'},
                '4': {resultado: 'ENCONTRO_MONSTRO', descricao: 'O que achou que aconteceria?'},
            }
        },
        { 
            descricao: 'Sala com armadilhas' ,
            descricaoChatGpt: 'Descreva uma sala cheia de sangue com armadilhas no chão tendo um corredor no final' + padraoChatGpt,
            escolhas: {
                '1': 'Contornar armadilhas',
                '2': 'Escalar parede lateral',
                '3': 'Caminhar lentamente',
            },
            resultados: {
                '1': {resultado: 'ENCONTRO_MONSTRO', descricao: 'Levou tempo demais, um monstro te percebeu!'},
                '2': {resultado: 'NADA', descricao: 'Fez a escolha mais lógica, escapou ileso!'},
                '3': {resultado: 'ENCONTRO_MONSTRO', descricao: 'Um monstro te alcançou!'},
            }
        },
    ],

    //Possíveis monstros que estarão no calabouço
    monstros: [
        { 
            status: {
                vida: 40,
                ataque: 20,
                defesa: 10,
                esquiva: 20,
            },
            descricao: 'O Lobisomem' ,
            caracteristicas: ['Raivoso', 'Triste', 'Cansado', 'Louco'],
            descricaoChatGpt: 'Descreva um lobisomem :caracteristica' + padraoChatGpt,
            src: Lobisomem,
            acoesMonstro: [
                { descricao: 'Mordida', dano: 20, statusDebuff: null, descricaoChatGpt: 'Descreva um lobisomem me mordendo' + padraoChatGpt},
                { descricao: 'Rosnado', dano: 0, statusDebuff: { ataque: 10, esquiva: 10 }, descricaoChatGpt: 'Descreva um lobisomem rosnando para mim' + padraoChatGpt}
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
            descricaoChatGpt: 'Me descreva um Rato :caracteristica' + padraoChatGpt,
            src: Rato,
            acoesMonstro: [
                { descricao: 'Mordida', dano: 1, statusDebuff: null, descricaoChatGpt: 'Descreva um Rato me mordendo' + padraoChatGpt },
            ],
        },
        { 
            status: {
                vida: 40,
                ataque: 8,
                defesa: 10,
                esquiva: 40,
            },
            descricao: 'O Vampiro' ,
            caracteristicas: ['Sedento', 'Galanteador', 'Safado', 'Brilhante'],
            descricaoChatGpt: 'Me descreva um Vampiro :caracteristica' + padraoChatGpt,
            src: Vampiro,
            acoesMonstro: [
                { descricao: 'Sugada', dano: 10, statusDebuff: { defesa: 5 }, descricaoChatGpt: 'Descreva um vampiro sugando meu sangue' + padraoChatGpt },
                { descricao: 'Seduzir', dano: 0, statusDebuff: { ataque: 5, esquiva: 5 }, descricaoChatGpt: 'Descreva um vampiro me seduzindo' + padraoChatGpt },
                { descricao: 'Aterrorizar', dano: 0, statusDebuff: { defesa: 10 }, descricaoChatGpt: 'Descreva um vampiro me aterrorizando' + padraoChatGpt },
            ],
        },
        { 
            status: {
                vida: 20,
                ataque: 30,
                defesa: 25,
                esquiva: 10,
            },
            descricao: 'O Espreitador de vinhas' ,
            caracteristicas: ['Verde', 'Perigosa', 'Escondida'],
            descricaoChatGpt: 'Me descreva uma criatura que se esconde em vinhas :caracteristica' + padraoChatGpt,
            src: EspreitadorVinhas,
            acoesMonstro: [
                { descricao: 'Ataque Surpresa', dano: 20, statusDebuff: null, descricaoChatGpt: 'Descreva uma criatura que se esconde em vinhas me atacando com dentes afiados' + padraoChatGpt },
                { descricao: 'Emaranhar', dano: 5, statusDebuff: { esquiva: 20 }, descricaoChatGpt: 'Descreva uma criatura que se esconde em vinhas me prendendo com vinhas' + padraoChatGpt },
                { descricao: 'Camuflagem', dano: 0, statusDebuff: { defesa: 10, esquiva: 10 }, descricaoChatGpt: 'Descreva uma criatura que se esconde em vinhas se escondendo em vinhas' + padraoChatGpt },
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
            descricaoChatGpt: 'Me descreva a morte emcapuzada :caracteristica' + padraoChatGpt,
            src: Morte,
            acoesMonstro: [
                { descricao: 'Matar', dano: 999, statusDebuff: null, descricaoChatGpt: 'Descreva um ceifador colhendo almas' + padraoChatGpt },
            ],
        },
    ]
    
}

export default global;