import React from 'react';
import { Button } from '@mui/material';

function ConfirmButton({ children, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ width: '15rem' }}
    >
      {children}
    </Button>
  );
}

export default ConfirmButton;
