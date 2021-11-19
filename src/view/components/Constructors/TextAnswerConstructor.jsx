import React from 'react';
import { TextField } from '@mui/material';

function TextAnswerConstructor({ answers, setAnswers }) {
  const { value } = answers[0];
  const handleChangeAnswer = (e) => {
    setAnswers([{
      value: e.target.value,
      isTrue: true,
    }]);
  };
  return (
    <TextField
      label="Ответ"
      value={value}
      onChange={handleChangeAnswer}
      multiline
      fullWidth
    />
  );
}

export default TextAnswerConstructor;
