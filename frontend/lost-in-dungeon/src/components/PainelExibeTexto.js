import React, { useEffect, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ControledOpenSelect from './ControledOpenSelect';
import Divider from '@mui/material/Divider';

import Imagem from './Imagem';
import Vida from '../img/coracao.png';
import Defesa from '../img/escudo.png';
import Esquiva from '../img/botaAsas.png';
import Ataque from '../img/espada.png';
import Icone from './IconesStatus';

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
  borderRadius: 2,
  border: '2px solid red',
  backgroundColor: 'rgba(3, 3, 3, 0.72)',
  color: 'aqua',
};

export default function SimpleContainer(props) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [props.texto]); // Reexecuta o efeito quando o texto muda

  const formatarTexto = props.texto.split('\n').map((item, index) => (
    <span key={index}>
      {item}
      <br />
    </span>
  ));

  return (
    <React.Fragment>
      <Grid container justifyContent="center" alignItems={"flex-start"}>
        <Grid item sx={style} marginRight={5}>
          <List>
            <ListItem>
              <ListItemText primary="STATUS" />
              <ControledOpenSelect lista={props.inventarioJogador}/>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Icone src={Vida} />
              <ListItemText primary={`Vida: ${props.statusJogador.status.vida}`}/>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Icone src={Ataque} />
              <ListItemText primary={`Ataque: ${props.statusJogador.status.ataque}`} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Icone src={Defesa} />
              <ListItemText primary={`Defesa: ${props.statusJogador.status.defesa}`} />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Icone src={Esquiva} />
              <ListItemText primary={`Esquiva: ${props.statusJogador.status.esquiva}`} />
            </ListItem>
            <Divider component="li" />
          </List>
        </Grid>

        <Grid item xs={6}>
          <Box ref={boxRef} sx={{ fontSize: '23px', bgcolor: 'rgba(3, 3, 3, 0.72)', color: 'white', height: '50vh', width:'100%', borderRadius: 2, border: '2px solid red', overflowY: 'auto' }}>
            {formatarTexto}
          </Box>
        </Grid>

        <Grid item sx={style} marginLeft={5}>
          { props.statusJogador.encontrouMonstro || props.statusJogador.jogadorMorreu ? (
            <>
            <Imagem src={props.statusMonstro.src} />
            <List>
              <ListItem>
                <ListItemText primary="STATUS" />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary={`Vida: ${props.statusMonstro.status.vida}`}/>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary={`Ataque: ${props.statusMonstro.status.ataque}`} />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary={`Defesa: ${props.statusMonstro.status.defesa}`} />
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary={`Esquiva: ${props.statusMonstro.status.esquiva}`} />
              </ListItem>
              <Divider component="li" />
            </List>
          </>
          ) : (
            <List>
              <ListItem>
                <ListItemText primary="Sem monstros na área!" />
              </ListItem>
              <Divider component="li" />
            </List>
          ) }
        </Grid>

      </Grid>
    </React.Fragment>
  );
}