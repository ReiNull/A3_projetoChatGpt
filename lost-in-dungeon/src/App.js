import React from 'react';
import { Button, Box, Container, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      conteudo:  '1'
    }
  }

  incrementaConteudo(texto) {
    this.setState({conteudo: `${this.state.conteudo}${texto}`})
  }

  render() {
    return (
      <div className="App">
        <Container fixed>
          <Box sx={{ bgcolor: 'lightBlue', height: '50vh' }}>
            {this.state.conteudo}
          </Box>
        </Container>
        <Box sx={{ width: '100%', marginLeft: '8.5%', }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
              <Button onClick={()=>this.incrementaConteudo('1')} sx={{ width: '100%', textAlign: 'center'}} variant="contained">1</Button>
            </Grid>
            <Grid item xs={5}>
              <Button onClick={()=>this.incrementaConteudo('2')} sx={{ width: '100%', textAlign: 'center'}} variant="contained">2</Button>
            </Grid>
          </Grid>
          <br></br>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>  
            <Grid item xs={5}>
              <Button onClick={()=>this.incrementaConteudo('3')} sx={{ width: '100%', textAlign: 'center'}} variant="contained">3</Button>
            </Grid>
            <Grid item xs={5}>
              <Button onClick={()=>this.incrementaConteudo('4')} sx={{ width: '100%', textAlign: 'center'}} variant="contained">4</Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default App; 
