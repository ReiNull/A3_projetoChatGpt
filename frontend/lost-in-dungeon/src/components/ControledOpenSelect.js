import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect(props) {
  const [age] = React.useState('');
  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const montarLista = () => {
    return props.lista.map(item => {
        let texto = item.descricao ? item.descricao : 'Vazio';

        if(item.status) {
            if(item.status.ataque)
                texto += `|Ataque: +${item.status.ataque}|`;
            if(item.status.defesa)
                texto += `|Defesa: +${item.status.defesa}|`;
            if(item.status.esquiva)
                texto += `|Esquiva: +${item.status.esquiva}|`;
        }
        return <MenuItem value={10}>{texto}</MenuItem>;
    })
  };

  return (
    <div>
      <Button sx={{ color: 'aqua'}} onClick={handleOpen}>
        Abrir Inventário
      </Button>
      <FormControl>
        {/* <InputLabel id="demo-controlled-open-select-label"></InputLabel> */}
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          value={age}
          label="Age"
          disabled
        >
          {montarLista()}
        </Select>
      </FormControl>
    </div>
  );
}