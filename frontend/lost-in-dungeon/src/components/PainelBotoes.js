import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import '../css/jogoPage.css';

export default function NestedGrid(props) {
    return (
        <Grid container sx={{ width: '1650px', height: '20vh', borderRadius: 2, border: '2px solid red', backgroundColor: 'rgba(3, 3, 3, 0.72)' }}>
            { props.statusJogador.encontrouMonstro ? (
                <>
                    <Grid justifyContent="center" alignItems="center" container item spacing={3}>
                        <Grid item xs={5}>
                            <Button onClick={()=>props.clique(1)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>ATAQUE</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button onClick={()=>props.clique(2)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>DEFESA</Button>
                        </Grid>
                    </Grid>
                    <Grid justifyContent="center" alignItems="center" container item spacing={3}>
                        <Grid item xs={5}>
                            <Button onClick={()=>props.clique(2)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>ESQUIVA</Button>
                        </Grid>
                        <Grid item xs={5}>
                            <Button onClick={()=>props.clique(4)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>FUGIR</Button>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid justifyContent="center" alignItems="center" container item spacing={3}>
                        {props.acoes && props.acoes['1'] ? (
                            <Grid item xs={5}>
                                <Button onClick={()=>props.clique(1)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>{props.acoes['1']}</Button>
                            </Grid>
                        ) : null}
                        {props.acoes && props.acoes['2'] ? (
                            <Grid item xs={5}>
                                <Button onClick={()=>props.clique(2)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>{props.acoes['2']}</Button>
                            </Grid>
                        ) : null}
                    </Grid>
                    <Grid justifyContent="center" alignItems="center" container item spacing={3}>
                        {props.acoes && props.acoes['3'] ? (
                            <Grid item xs={5}>
                                <Button onClick={()=>props.clique(2)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>{props.acoes['3']}</Button>
                            </Grid>
                        ) : null}
                        {props.acoes && props.acoes['4'] ? (
                            <Grid item xs={5}>
                                <Button onClick={()=>props.clique(4)} color="error" variant="outlined" sx={{ width: '100%', fontFamily: 'VT323', color: 'white', fontSize: '23px', backgroundColor:'black' }}>{props.acoes['4']}</Button>
                            </Grid>
                        ) : null}
                    </Grid>
                </>
            ) } 
        </Grid>
    );
}