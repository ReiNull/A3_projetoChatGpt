import * as React from 'react';
import { Box, Grid, Button } from '@mui/material';

import Imagem from './Imagem';

// function createMarkup() {
//   return {__html: '<font color="red">First &middot; Second</font>'};
// }

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems={"center"} spacing={3}>
        <Grid flexGrow={1} item xs={2}>
            <Box sx={{ alignItems: 'flex-start', bgcolor: '#990000', height: '50vh', border: '2px solid brown' }}>
              <Imagem />
              <Button fullWidth variant='contained'>STATUS</Button>
              <Button fullWidth variant='contained'>Vida: {props.statusJogador.vida}</Button>
              <Button fullWidth variant='contained'>Ataque: {props.statusJogador.ataque}</Button>
              <Button fullWidth variant='contained'>Defesa: {props.statusJogador.defesa}</Button>
              <Button fullWidth variant='contained'>Esquiva: {props.statusJogador.esquiva}</Button> 
            </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ bgcolor: '#cce0ff', height: '50vh', width:'100%', border: '2px solid brown' }}>
            {props.texto}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}