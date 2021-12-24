import React, { useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function PasswordInput({
  value, onChange, label, submit,
}) {
  const [show, setShow] = useState(false);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleClickShowPassword = () => setShow(!show);
  const handleKeyPress = (event) => { if (event.key === 'Enter' && submit) submit(); };

  const visibilityButton = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {show ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <FormControl
      variant="outlined"
      sx={{
        mb: '1rem',
        width: '15rem',
      }}
    >
      <InputLabel
        htmlFor="password"
      >
        {label}
      </InputLabel>
      <OutlinedInput
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={visibilityButton}
        label={label}
        onKeyDown={handleKeyPress}
      />
    </FormControl>
  );
}

export default PasswordInput;
