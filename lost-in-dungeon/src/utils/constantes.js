const constantes = {
    botoesJogo: {
        '1': 'Atacar',
        '2': 'Defender',
        '3': 'Esquivar',
        '4': 'Correr',
    },

    // Status do jogador
    jogador: {
        status: {
            vida: 10,
            ataque: 1,
            defesa: 2,
            esquiva: 5,
        }
        //TO DO: inventario que o jogador adquire no calabouço
    },

    //TO DO: Itens dentro do calabouço
    items: [

    ],

    // Possíveis fases do jogo
    fases: [
        { 
            descricao: 'sala com Baú monstruoso' ,
            descricaoChatGpt: 'Descreva um Baú monstruoso',
            escolhas: {
                '1': 'Abrir Baú',
                '2': 'Chutar Baú',
                '3': 'Se Afastar do Baú',
            },
            resultados: {
                '1': '{PERDER VIDA}',
                '2': '{GANHAR ITEM}',
                '3': '{ENCONTRO COM MONSTRO}',
            }
        },
        { 
            descricao: 'sala com Neblina com uma porta no final' ,
            descricaoChatGpt: 'Descreva uma sala com neblina com uma porta no final',
            escolhas: {
                '1': 'Ir até a porta',
                '2': 'Esperar neblina sumir',
            },
            resultados: {
                '1': '{NADA}',
                '2': '{ENCONTRO COM MONSTRO}',
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
            descricao: 'Lobisomem' ,
            caracteristicas: ['Raivoso', 'Triste', 'Cansado', 'Louco'],
            descricaoChatGpt: 'Me descreva um lobisomem :caracteristica, no máximo 20 palavras, texto corrido',
            acoesMonstro: [
                { descricao: 'Mordida', dano: 5, statusDebuff: '', descricaoChatGpt: 'Descreva um lobisomem me mordendo' },
                { descricao: 'Rosnado', dano: 0, statusDebuff: 'jogadorStatus.ataque -= 1', descricaoChatGpt: 'Descreva um lobisomem rosnando para mim'}
            ],
        },
        { 
            status: {
                vida: 5,
                ataque: 2,
                defesa: 2,
                esquiva: 2,
            },
            descricao: 'Rato' ,
            caracteristicas: ['Raivoso', 'Triste', 'Cansado', 'Louco'],
            descricaoChatGpt: 'Me descreva um Rato :caracteristica, no máximo 20 palavras, texto corrido',
            acoesMonstro: [
                { descricao: 'Mordida', dano: 1, statusDebuff: '', descricaoChatGpt: 'Descreva um Rato me mordendo' },
            ],
        }
    ],
    
}

export default constantes;