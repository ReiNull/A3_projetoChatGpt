import React from 'react';
import Grid from '@mui/material/Grid';

import PainelExibeTexto from '../../components/PainelExibeTexto';
import PainelBotoes from '../../components/PainelBotoes';

import GeradorTextoStore from '../../store/geradorTextoStore';
import CalaboucoStarterStore from '../../store/calaboucoStarterStore';

class JogoPage extends React.Component {
    constructor(props) {
        super();
        this.geradorTextoStore = new GeradorTextoStore();
        this.calaboucoStarterStore = new CalaboucoStarterStore(props.fasesTotais);

        this.state = {
            parametrosGlobais: {
                fasesTotais: props.fasesTotais,
            },
            paraemtrosAtuais: {
                faseAtual: 0,
                acoesAtuais: this.calaboucoStarterStore.acoesSala(),
            },
            logCompleto: this.geradorTextoStore.inicializador(this.calaboucoStarterStore.salaAtual.descricao),
            indexAcao: 0,
        }

        this.receberEscolha = this.receberEscolha.bind(this);
        this.avancarFase = this.avancarFase.bind(this);
    }

    receberEscolha(indexAcao) {
        this.setState({ indexAcao })
        if(this.state.paraemtrosAtuais.faseAtual >= this.state.parametrosGlobais.fasesTotais) {
            console.log('Você escapou do Calabouço Perdido');
            return;
        }

        const novoTexto = this.geradorTextoStore.gerarResultadoSala(this.state.logCompleto, indexAcao, this.calaboucoStarterStore.salaAtual.resultados);
        
        this.setState({ logCompleto: novoTexto }, ()=>this.avancarFase());
    }

    avancarFase() {
        this.calaboucoStarterStore.carregarSala(this.state.paraemtrosAtuais.faseAtual);
        const acoes = this.calaboucoStarterStore.acoesSala();
        const novoTexto = this.geradorTextoStore.gerarTextoAleatorio(this.state.logCompleto, this.calaboucoStarterStore.salaAtual.descricao);

        this.setState({ logCompleto: novoTexto, paraemtrosAtuais: { faseAtual: this.state.paraemtrosAtuais.faseAtual + 1, acoesAtuais: acoes }});
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid sx={{ color: 'white', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>
                <Grid item xs={12}>
                    <PainelExibeTexto texto={this.state.logCompleto} />
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={12}>
                    <PainelBotoes acoes={this.state.paraemtrosAtuais.acoesAtuais} clique={this.receberEscolha}/>
                </Grid>
            </Grid>
        );
    }
}

export default JogoPage;