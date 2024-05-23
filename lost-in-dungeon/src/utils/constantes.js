const constantes = {
    STATUS_DEBUFF: { 
        menosDefesa: 'DEFESA',
        menosDano: 'DANO',
        menosEsquiva: 'ESQUIVA',
    },
    
    // Status do jogador
    jogador: {
        status: {
            vida: 2,
            ataque: 1,
            defesa: 2,
            esquiva: 5,
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
            descricaoChatGpt: 'Descreva um Baú monstruoso',
            escolhas: {
                '1': 'Abrir Baú',
                '2': 'Chutar Baú',
                '3': 'Se Afastar do Baú',
            },
            resultados: {
                '1': 'PERDER_VIDA',
                '2': 'GANHAR_VIDA',
                '3': 'ENCONTRO_MONSTRO',
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
                '1': 'NADA',
                '2': 'PERDER_VIDA',
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