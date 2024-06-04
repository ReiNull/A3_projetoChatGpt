import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import JogoPage from './JogoPage';
import Configuracoes from './Configuracoes';

class Selecionador extends React.Component {
    constructor() {
        super();
        this.state = { value: 'config', checkboxValor: true, fasesQtd: 0, monstrosQtd: 0 };

        this.handleChange = this.handleChange.bind(this);
        this.encerrarJogo = this.encerrarJogo.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({ value: newValue });
    }

    encerrarJogo() {
        this.setState({ value: 'config' });
    }

    escolhaBotao = (faseSelecionadas, monstrosSelecionados) => {
        this.setState({ fasesQtd: faseSelecionadas, monstrosQtd: monstrosSelecionados, value: 'jogo' });
    }

    escolhaCheckbox = (valor) => {
        this.setState({ checkboxValor: valor });
    }

    render() {
        const renderizao = {
            'config': <Configuracoes checkbox={this.escolhaCheckbox} clique={this.escolhaBotao}/>,
            'jogo': <JogoPage fasesTotais={this.state.fasesQtd} monstrosTotais={this.state.monstrosQtd} checkbox={this.state.checkboxValor} encerrarJogo={this.encerrarJogo}/>
        }
        return (
            <>
                <Tabs sx={{ backgroundColor: 'white' }} textColor="secondary" indicatorColor="secondary" value={this.state.value} onChange={this.handleChange} centered>
                    <Tab value="config" label="Configuração" />
                    <Tab value="jogo" label="Jogo" disabled/>
                </Tabs>
                {renderizao[this.state.value]}
            </>
        );
    }
}

export default Selecionador;