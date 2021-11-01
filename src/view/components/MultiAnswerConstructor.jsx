import React, { useState } from 'react';
import {
  Button, Grid, Radio, Stack, TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function MultiAnswerConstructor() {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Radio
            checked={value === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
          />
          <TextField label="Вариант ответа" fullWidth multiline />
          <Button disabled variant="contained"><DeleteIcon /></Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Radio
            checked={value === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
          />
          <TextField label="Вариант ответа" fullWidth multiline />
          <Button disabled variant="contained"><DeleteIcon /></Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center">
          <Button variant="outlined">Добавить вариант ответа</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Кол-во баллов"
          type="number"
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

export default MultiAnswerConstructor;
