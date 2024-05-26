import React from 'react';
import Grid from '@mui/material/Grid';
import PainelExibeTexto from '../../components/PainelExibeTexto';
import PainelBotoes from '../../components/PainelBotoes';
import GeradorTextoStore from '../../store/geradorTextoStore';
import CalaboucoStarterStore from '../../store/calaboucoStarterStore';
import MonstrosStore from '../../store/monstrosStore';
import '../../css/jogoPage.css';

class JogoPage extends React.Component {
    constructor(props) {
        super(props);
        this.geradorTextoStore = new GeradorTextoStore();
        this.monstrosStore = new MonstrosStore(this.geradorTextoStore, 5);
        this.calaboucoStarterStore = new CalaboucoStarterStore(this.geradorTextoStore, this.monstrosStore, props.fasesTotais);

        this.state = {
            logCompleto: this.geradorTextoStore.getState().logCompleto
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.receberEscolha = this.receberEscolha.bind(this);
        this.avancarFase = this.avancarFase.bind(this);
    }

    componentDidMount() {
        this.geradorTextoStore.subscribe(this.handleStateChange);
    }

    componentWillUnmount() {
        this.geradorTextoStore.unsubscribe(this.handleStateChange);
    }

    handleStateChange(state) {
        this.setState({ logCompleto: state.logCompleto });
    }

    receberEscolha(indexAcao) {
        this.setState({ indexAcao });
        this.calaboucoStarterStore.fezEscolhaEmFase(indexAcao);
    }

    avancarFase() {
        this.calaboucoStarterStore.avancarFase();
    }

    render() {
        return (
            <Grid alignItems={"center"}>
                <Grid justifyContent="center" alignItems={"center"}>
                    <Grid sx={{ color: 'red', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>
                    <Grid sx={{ color: 'red', fontSize: '25px' }} item xs={12}>Salas restantes: {this.calaboucoStarterStore.salasRestantes} Estado: {this.geradorTextoStore.descricaoCarregando ? 'Carregando' : 'Pronto'}</Grid>
                    <Grid item sx={{marginTop: '10px'}}>
                        <PainelExibeTexto statusJogador={this.calaboucoStarterStore.jogador} statusMonstro={this.monstrosStore.getMonstro} texto={this.state.logCompleto} />
                    </Grid>
                    <Grid container item sx={{marginTop: '50px'}} justifyContent="center" alignItems={"center"}>
                        <PainelBotoes acoes={this.calaboucoStarterStore.getAcoesfase} statusJogador={this.calaboucoStarterStore.jogador} clique={this.receberEscolha} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default JogoPage;