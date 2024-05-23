import React from 'react';

import Grid from '@mui/material/Grid';

import PainelExibeTexto from '../../components/PainelExibeTexto';
import PainelBotoes from '../../components/PainelBotoes';

import GeradorTextoStore from '../../store/geradorTextoStore';
import CalaboucoStarterStore from '../../store/calaboucoStarterStore';

import '../../css/jogoPage.css';

class JogoPage extends React.Component {
    constructor(props) {
        super();
        this.geradorTextoStore = new GeradorTextoStore();
        this.calaboucoStarterStore = new CalaboucoStarterStore(props.fasesTotais, this.geradorTextoStore);

        this.receberEscolha = this.receberEscolha.bind(this);
        this.avancarFase = this.avancarFase.bind(this);
    }

    receberEscolha(indexAcao) {
        this.setState({ indexAcao })
        this.calaboucoStarterStore.fezEscolhaEmFase(indexAcao);
    }

    avancarFase() {
        this.calaboucoStarterStore.avancarFase();
    }

    render() {
        return (
            <Grid alignItems={"center"}>
                <Grid justifyContent="center" alignItems={"center"}>
                    <Grid sx={{ color: 'white', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>
                    <Grid sx={{ color: 'white' }} item xs={12}>Salas restantes {this.calaboucoStarterStore.salasRestantes}</Grid>
                    <Grid item>
                        <PainelExibeTexto statusJogador={this.calaboucoStarterStore.jogador.status} texto={this.geradorTextoStore.logCompleto} />
                    </Grid>
                    <Grid item sx={{marginTop: '10px'}}>
                        <PainelBotoes acoes={this.calaboucoStarterStore.getAcoesfase} clique={this.receberEscolha}/>
                    </Grid>
                </Grid>
                
            </Grid>
        );
    }
}

export default JogoPage;