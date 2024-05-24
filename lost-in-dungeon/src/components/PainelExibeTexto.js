import * as React from 'react';
import { Box, Grid, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Imagem from './Imagem';

// function createMarkup() {
//   return {__html: '<font color="red">First &middot; Second</font>'};
// }

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }
const style = {
  py: 0,
  width: '100%',
  maxWidth: 300,
  //height: '100%',
  //maxHeight: 400,
  borderRadius: 2,
  border: '2px solid red',
  backgroundColor: 'black',
  color: 'aqua',
};

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems={"flex-start"}>
        <Grid item sx={style} marginRight={5}>
          <List>
            <ListItem>
              <ListItemText primary="STATUS" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary={`Vida: ${props.statusJogador.vida}`}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemText primary={`Ataque: ${props.statusJogador.ataque}`} />
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
              <ListItemText primary={`Defesa: ${props.statusJogador.defesa}`} />
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
              <ListItemText primary={`Esquiva: ${props.statusJogador.esquiva}`} />
            </ListItem>
            <Divider variant="middle" component="li" />
          </List>
        </Grid>
        {/* <Grid flexGrow={1} item xs={2}>
            <Box sx={{ alignItems: 'flex-start', bgcolor: '#990000', height: '50vh', border: '2px solid brown' }}>
          <Button sx={{ fontFamily: 'VT323' }} disableRipple='true' fullWidth variant='contained'>STATUS</Button>
          <Button sx={{ fontFamily: 'VT323' }} disableRipple='true' fullWidth variant='contained'>Vida: {props.statusJogador.vida}</Button>
          <Button sx={{ fontFamily: 'VT323' }} disableRipple='true' fullWidth variant='contained'>Ataque: {props.statusJogador.ataque}</Button>
          <Button sx={{ fontFamily: 'VT323' }} disableRipple='true' fullWidth variant='contained'>Defesa: {props.statusJogador.defesa}</Button>
          <Button sx={{ fontFamily: 'VT323' }} disableRipple='true' fullWidth variant='contained'>Esquiva: {props.statusJogador.esquiva}</Button> 
            </Box>
        </Grid> */}
        <Grid item xs={6}>
          <Box sx={{ fontSize: '23px', bgcolor: 'black', color: 'white', height: '50vh', width:'100%', borderRadius: 2, border: '2px solid red' }}>
            {props.texto}
          </Box>
        </Grid>

        <Grid item sx={style} marginLeft={5}>
          <List>
            <ListItem>
              <ListItemText primary="STATUS" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary={`Vida: ${props.statusJogador.vida}`}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemText primary={`Ataque: ${props.statusJogador.vida}`} />
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
              <ListItemText primary={`Defesa: ${props.statusJogador.vida}`} />
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
              <ListItemText primary={`Esquiva: ${props.statusJogador.vida}`} />
            </ListItem>
            <Divider variant="middle" component="li" />
          </List>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}