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
        this.calaboucoStarterStore = new CalaboucoStarterStore(props.fasesTotais, this.geradorTextoStore);

        this.state = {
            parametrosGlobais: {
                fasesTotais: props.fasesTotais,
            },
            paraemtrosAtuais: {
                faseAtual: 0,
                acoesAtuais: this.calaboucoStarterStore.getAcoesfase,
            },
            indexAcao: 0,
        }

        this.receberEscolha = this.receberEscolha.bind(this);
        this.avancarFase = this.avancarFase.bind(this);
    }

    receberEscolha(indexAcao) {
        this.setState({ indexAcao })
        this.calaboucoStarterStore.fezEscolhaEmFase(indexAcao);
        
        this.avancarFase();
    }

    avancarFase() {
        this.calaboucoStarterStore.avancarFase();
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid sx={{ color: 'white', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>
                <Grid item xs={12}>
                    <PainelExibeTexto texto={this.geradorTextoStore.logCompleto} />
                </Grid>
                <Grid container justifyContent="center" alignItems="center" item xs={12}>
                    <PainelBotoes acoes={this.calaboucoStarterStore.getAcoesfase} clique={this.receberEscolha}/>
                </Grid>
            </Grid>
        );
    }
}

export default JogoPage;