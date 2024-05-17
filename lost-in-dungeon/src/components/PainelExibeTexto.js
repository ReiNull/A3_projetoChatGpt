import * as React from 'react';
import { Box, Container, } from '@mui/material';

// function createMarkup() {
//   return {__html: '<font color="red">First &middot; Second</font>'};
// }

// function MyComponent() {
//   return <div dangerouslySetInnerHTML={createMarkup()} />;
// }

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', border: '2px solid brown' }}>
          {props.texto}
        </Box>
      </Container>
    </React.Fragment>
  );
}