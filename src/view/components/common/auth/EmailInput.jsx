import React from 'react';
import { TextField } from '@mui/material';

function EmailInput({ value, onChange }) {
  return (
    <TextField
      variant="outlined"
      label="Email"
      id="Email"
      value={value}
      onChange={onChange}
      sx={{
        mb: '1rem',
        mt: '1rem',
        width: '15rem',
      }}
    />
  );
}

export default EmailInput;
