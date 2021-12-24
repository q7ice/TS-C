import React from 'react';
import { TextField } from '@mui/material';

function TextAnswerResult({ answers }) {
  const { value } = answers[0];
  const { realValue } = answers[0];
  const handleNull = () => {};
  const correctAnswer = value === realValue;
  return (
    <>
      <TextField
        label="Ваш ответ"
        value={value}
        onChange={handleNull}
        multiline
        fullWidth
        error={!correctAnswer}
        helperText={!correctAnswer ? `Правильный ответ: ${realValue}` : null}
        color={correctAnswer ? 'success' : 'error'}
        InputProps={{
          readOnly: true,
        }}
      />
    </>
  );
}

export default TextAnswerResult;
