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
            status: {
                ataque: 10,
                defesa: 5
            }
        },
        {
            descricao: 'Adagas Duplas',
            status: {
                ataque: 5,
                esquiva: 10
            }
        },
        {
            descricao: 'Arco e Flecha',
            status: {
                ataque: 10,
                esquiva: 5
            }
        },
        {
            descricao: 'Cimitarra',
            status: {
                defesa: 5,
                ataque: 10,
                esquiva: 5,   
            }
        },
        {
            descricao: 'Katana',
            status: {
                ataque: 10,
                esquiva: 10,   
            }
        },
        {
            descricao: 'Espada Grande',
            status: {
                ataque: 20,
                esquiva: -5,
            }
        },
        {
            descricao: 'Zenith',
            status: {
                ataque: 20,
                esquiva: 15,
                defesa: 15
            }
        },
        {
            descricao: 'Escudo de Madeira',
            status: {
                defesa: 10
            }
        },
        {
            descricao: 'Cota de Malha',
            status: {
                defesa: 15
            }
        },
        {
            descricao: 'Armadura de Couro',
            status: {
                esquiva: 5,
                defesa: 10
            }
        },
        {
            descricao: 'Botas',
            status: {
                defesa: 5,
                esquiva: 10,
            }
        },
        
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
            descricao: "Sala com uma parede estranha",
            descricaoChatGpt: "Descreva uma sala de uma dungeon, com um parede estranha (não parece que ela é real)" + padraoChatGpt,
            escolhas: {
                '1': 'Atacar a parede',
                '2': 'Correr e atravessar a parede'
            },
            resultados: {
                '1': {resultado: 'GANHAR_ITEM', descricao: "A parede se dissipa e você encherga um item misterioso."},
                '2': {resultado: 'PERDER_VIDA', descricao: "Você bate com toda a força na parede e cai no chão."},
            }
        },
        {
            descricao: "Sala com Enigma dos Espelhos",
            descricaoChatGpt: "Descreva uma sala de uma dungeon com vários espelhos, onde há um enigma a ser resolvido" + padraoChatGpt,
            escolhas: {
                '1': 'Alinhar os espelhos',
                '2': 'Quebrar um espelho',
                '3': 'Se olhar no espelho'
            },
            resultados: {
                '1': {resultado: 'GANHAR_ITEM', descricao: "Ao alinhar corretamente os espelhos, um compartimento secreto se abre e você encontra um item valioso!"},
                '2': {resultado: 'PERDER_VIDA', descricao: "Ao quebrar um espelho, todos os espelhos se quebram ao mesmo tempo e voam cacos de vidros em sua direção."},
                '3': {resultado: 'GANHAR_VIDA', descricao: "Um sentimento gracioso percorre sua cabeça e magicamente você se sente melhor."}
            }
        },
        {
            descricao: "Corredor obscuro com barulhos estranhos",
            descricaoChatGpt: "Descreva uma corredor obscuro de uma dungeon, com uma silhueta feminina com um canto chamativo" + padraoChatGpt,
            escolhas: {
                '1': 'Avançar sorrateiramente até a silhueta',
                '2': 'Avançar rapidamente e atacar',
            },
            resultados: {
                '1': {resultado: 'GANHAR_ITEM', descricao: "Você encontra uma estatua feminina com um item ao lado."},
                '2': {resultado: 'ENCONTRO_MONSTRO', descricao: "O barulho do canto para e um grito ensurdecedor percorre o corredor, você deu de cara com um monstro!"},
            }
        },
        {
            descricao: "Sala com cristais coloridos",
            descricaoChatGpt: "Descreva uma sala de uma dungeon repleta de cristais brilhantes e coloridos" + padraoChatGpt,
            escolhas: {
                '1': 'Tocar no cristal maior',
                '2': 'Quebrar os cristais',
                '3': 'Organizar os cristais por cor'
            },
            resultados: {
                '1': {resultado: 'PERDER_VIDA', descricao: "Você sente sua energia vital sendo sugada pelo cristal."},
                '2': {resultado: 'GANHAR_VIDA', descricao: "Você encherga várias áureas sendo atraídas para dentro de seu peito. Você se sente melhor."},
                '3': {resultado: 'GANHAR_ITEM', descricao: "Os cristais emanam uma luz misteriosa. Você ouve um compartimento secreto sendo aberto e é agraciado com um item."},
            }
        },
        {
            descricao: "Corredor com silencioso",
            descricaoChatGpt: "Descreva uma corredor silencioso de uma dungeon, com uma silhueta pequena parecendo uma criança" + padraoChatGpt,
            escolhas: {
                '1': 'Correr e ajudar a criança',
                '2': 'Chamar a criança',
                '3': 'Correr e atacar a silhueta misteriosa',
                '4': 'Não fazer nada',
            },
            resultados: {
                '1': {resultado: 'NADA', descricao: "Ao se aproximar, você enxerga uma criança fantasma, que ao lhe ver, se assusta voa rapidamente para longe."},
                '2': {resultado: 'GANHAR_VIDA', descricao: "Você encherga uma pequeno fantasma vindo em sua direção, que o atravessa e some pelas suas costas. Estranhamente você se sente bem"},
                '3': {resultado: 'ENCONTRO_MONSTRO', descricao: "Você aproxima e ataca, mas estranhamente sente que não acertou nada. Em seguinda, um barulho ensurdecedor vem em seu ouvido. Um monstro apareceu bem na sua frente."},
                '4': {resultado: 'GANHAR_ITEM', descricao: "Após muito tempo, a silhueta se dissipa e você ouve um barulho de algo caindo no chão, chegando perto um item aparece diante de seus olhos."},
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
        { 
            status: {
                vida: 1,
                ataque: 99,
                defesa: 1,
                esquiva: 99,
            },
            descricao: 'O Coelho' ,
            caracteristicas: ['Com aura congelante'],
            descricaoChatGpt: 'Me descreva um coelho :caracteristica' + padraoChatGpt,
            src: Coelho,
            acoesMonstro: [
                { descricao: 'Chama Congelante', dano: 0, statusDebuff: { ataque: 5 }, descricaoChatGpt: 'Descreva um coelho congelando as minhas mãos' + padraoChatGpt },
                { descricao: 'Chama Congelante', dano: 0, statusDebuff: { defesa: 5 }, descricaoChatGpt: 'Descreva um coelho congelando meu tronco' + padraoChatGpt },
                { descricao: 'Chama Congelante', dano: 0, statusDebuff: { esquiva: 5 }, descricaoChatGpt: 'Descreva um coelho congelando meus pés' + padraoChatGpt },
                { descricao: 'Salto', dano: 10, statusDebuff: null, descricaoChatGpt: 'Descreva um coelho saltando na minha cabeça' + padraoChatGpt },
            ],
        },
    ]
    
}

export default global;