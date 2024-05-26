import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Box, Container, } from '@mui/material';

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
            <>
                <Grid sx={{ color: 'white', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>
                <Grid container justifyContent="center" alignItems="center" spacing={3}>
                    <Grid item xs={2}>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', border: '2px solid brown' }}>
                        
                    </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid item>
                            <PainelExibeTexto texto={this.geradorTextoStore.logCompleto} />
                        </Grid>
                        <Grid container justifyContent="center" alignItems="center" item>
                            <PainelBotoes acoes={this.calaboucoStarterStore.getAcoesfase} clique={this.receberEscolha}/>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );

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

        return (
            <Grid alignItems={"center"} justifyContent="center">
                <Grid sx={{ color: 'white', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>
                <Grid sx={{ backgroundColor: 'green'}} container justifyContent="center" spacing={3}>
                    <Grid item xs={2}>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', border: '2px solid brown' }}>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid item>
                            <PainelExibeTexto texto={this.geradorTextoStore.logCompleto} />
                        </Grid>
                        <Grid item sx={{marginTop: '10px'}}>
                            <PainelBotoes acoes={this.calaboucoStarterStore.getAcoesfase} clique={this.receberEscolha}/>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        );
    }
}

export default JogoPage;