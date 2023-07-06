import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import { useStore } from 'effector-react';
import { counterStore, createCounter, decrement, increment } from 'stores';
import { eventEmitter } from 'EventEmitter';

function Counter() {
  const counters = useStore(counterStore);

  const handleIncrement = (key: string) => {
    increment(key);
    eventEmitter.emit('counterChange', null);
  };

  const handleDecrement = (key: string) => {
    decrement(key);
    eventEmitter.emit('counterChange', null);
  };

  const handleCreate = (key: string) => {
    createCounter(key);
    eventEmitter.emit('counterCount', Object.entries(counters).length + 1);
  };

  return (
    <div>
      {Object.entries(counters).map(([key, value]) => (
        <Box
          key={key}
          sx={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}
        >
          <Button
            variant="contained"
            onClick={() => handleDecrement(key)}
            size="small"
          >
            -
          </Button>
          <Typography variant="h4" sx={{ marginRight: '7px', ml: '7px' }}>
            {value.count}
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleIncrement(key)}
            size="small"
          >
            +
          </Button>
        </Box>
      ))}
      <Button
        variant="contained"
        onClick={() => handleCreate(String(Math.random() * 100))}
        size="small"
      >
        Create
      </Button>
    </div>
  );
}

export default Counter;
