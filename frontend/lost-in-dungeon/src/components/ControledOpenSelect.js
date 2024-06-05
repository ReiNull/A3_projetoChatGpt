import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function ControlledOpenSelect(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const montarLista = () => {
    return props.lista.map((item) => {
        let texto = item.descricao ? item.descricao : 'Vazio';

        if(item.status) {
            if(item.status.ataque)
                texto += `|Ataque: +${item.status.ataque}|`;
            if(item.status.defesa)
                texto += `|Defesa: +${item.status.defesa}|`;
            if(item.status.esquiva)
                texto += `|Esquiva: +${item.status.esquiva}|`;
        }
        return <MenuItem value=''>{texto}</MenuItem>;
    })
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel key='youaremyspecial' sx={{ color: 'aqua'}} id="demo-controlled-open-select-label">Inventário</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          {montarLista()}
        </Select>
      </FormControl>
    </div>
  );
}