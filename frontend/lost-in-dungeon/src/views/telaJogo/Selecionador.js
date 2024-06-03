import React from 'react';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import JogoPage from './JogoPage';

class Selecionador extends React.Component {
    constructor() {
        super();
        this.state = { value: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({ value: newValue });
    }

    render() {
        const renderizao = {
            '0': <Grid sx={{ color: 'red', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>,
            '1': <JogoPage fasesTotais={50}/>
        }
        return (
            <>
                <Tabs sx={{ backgroundColor: 'white' }} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example" value={this.state.value} onChange={this.handleChange} centered>
                    <Tab label="Configuração" />
                    <Tab label="Jogo"/>
                </Tabs>
                {renderizao[this.state.value]}
            </>
        );
    }
}

export default Selecionador;