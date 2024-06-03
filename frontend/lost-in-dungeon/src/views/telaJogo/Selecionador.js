import React from 'react';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import JogoPage from './JogoPage';

class Selecionador extends React.Component {
    constructor() {
        super();
        this.state = { value: 'config' };

        this.handleChange = this.handleChange.bind(this);
        this.encerrarJogo = this.encerrarJogo.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({ value: newValue });
    }

    encerrarJogo() {
        this.setState({ value: 'config' });
    }

    render() {
        const renderizao = {
            'config': <Grid sx={{ color: 'red', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>,
            'jogo': <JogoPage fasesTotais={50} encerrarJogo={this.encerrarJogo}/>
        }
        return (
            <>
                <Tabs sx={{ backgroundColor: 'white' }} textColor="secondary" indicatorColor="secondary" value={this.state.value} onChange={this.handleChange} centered>
                    <Tab value="config" label="Configuração" />
                    <Tab value="jogo" label="Jogo"/>
                </Tabs>
                {renderizao[this.state.value]}
            </>
        );
    }
}

export default Selecionador;