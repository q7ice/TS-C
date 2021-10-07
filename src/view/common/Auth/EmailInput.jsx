import React from 'react';
import { TextField } from '@mui/material';

function EmailInput({ value, onChange }) {
  return (
    <TextField
      sx={{ mb: '1rem', mt: '1rem', width: '15rem' }}
      variant="outlined"
      label="Email"
      id="Email"
      value={value}
      onChange={onChange}
    />
  );
}

export default EmailInput;
