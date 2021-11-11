import React from 'react';
import {
  Button, Radio, Stack, Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

function SingleAnswerVariant({ answer, setAnswerIsChecked }) {
  const handleChangeIsChecked = () => {
    setAnswerIsChecked();
  };
  const generatedId = `${Math.random()}`;
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ mb: 2 }}

    >
      <Radio
        checked={answer.isTrue}
        onChange={handleChangeIsChecked}
        name="radio-buttons"
        id={generatedId}
      />
      <Typography component="label" sx={{ cursor: 'pointer' }} htmlFor={generatedId}>{answer.value}</Typography>
    </Stack>
  );
}

function SingleAnswerForm({ answers, setAnswers }) {
  const setAnswerIsChecked = (index) => () => {
    const newAnswers = answers.map((item, i) => {
      if (index !== i) return { value: item.value, id: item.id, isTrue: false };
      return { value: item.value, id: item.id, isTrue: true };
    });
    setAnswers(newAnswers);
  };

  return (
    <Box>
      {
        answers.map((answer, index) => (
          <SingleAnswerVariant
            key={index}
            answer={answer}
            setAnswerIsChecked={setAnswerIsChecked(index)}
          />
        ))
      }
    </Box>
  );
}

export default SingleAnswerForm;
