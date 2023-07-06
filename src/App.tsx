import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Counter from 'components/Counter';
import HeaderCounter from 'components/HeaderCounter';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <HeaderCounter />
        <Counter />
      </Box>
    </Container>
  );
}
