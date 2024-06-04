import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Configuracoes(props) {
  return (
    <>
      <Grid sx={{ color: 'red', fontSize: '70px' }} item xs={12}>LOST IN DUNGEON</Grid>
      <Grid
        item
        xs={12}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
          marginLeft: '25%',
          width: '50%',
          borderRadius: 2,
          border: '2px solid red',
          backgroundColor: 'rgba(3, 3, 3, 0.72)',
          '& > *': {
            m: 7,
          },
        }}
      >
        <Grid>
          <Grid sx={{ color: 'red', fontSize: '45px' }} item xs={12}>Dificuldade</Grid>
          <Grid item xs={12}> 
            <Button onClick={()=>props.clique(25, 5)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>Fácil: 25 Fases 5 Monstros</Button>
            <Button onClick={()=>props.clique(50, 15)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>Médio: 50 Fases 15 Monstros</Button>
            <Button onClick={()=>props.clique(75, 45)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>Difícil: 75 Fases 45 Monstros</Button>
            <FormControlLabel onChange={(e) => props.checkbox(e.target.checked) } control={<Checkbox defaultChecked color='error'/>} sx={{ color: 'white' }} label="Monstros Especiais" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}