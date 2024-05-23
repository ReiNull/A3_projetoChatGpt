import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import '../css/jogoPage.css';

export default function NestedGrid(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid justifyContent="center" alignItems="center" container item spacing={3}>
                    {props.acoes && props.acoes['1'] ? (
                        <Grid item xs={4}>
                            <Button onClick={()=>props.clique(1)} color="error" sx={{ width: '100%', fontFamily: 'VT323' }} variant="contained">{props.acoes['1']}</Button>
                        </Grid>
                    ) : null}
                    {props.acoes && props.acoes['2'] ? (
                        <Grid item xs={4}>
                            <Button onClick={()=>props.clique(2)} color="success" sx={{ width: '100%', fontFamily: 'VT323' }} variant="contained">{props.acoes['2']}</Button>
                        </Grid>
                    ) : null}
                </Grid>
                <Grid justifyContent="center" alignItems="center" container item spacing={3}>
                    {props.acoes && props.acoes['3'] ? (
                        <Grid item xs={4}>
                            <Button onClick={()=>props.clique(2)} color="secondary" sx={{ width: '100%', fontFamily: 'VT323' }} variant="contained">{props.acoes['3']}</Button>
                        </Grid>
                    ) : null}
                    {props.acoes && props.acoes['4'] ? (
                       <Grid item xs={4}>
                            <Button onClick={()=>props.clique(4)} sx={{ width: '100%', fontFamily: 'VT323' }} variant="contained">{props.acoes['4']}</Button>
                        </Grid>
                    ) : null}
                </Grid>
            </Grid>
        </Box>
    );
}