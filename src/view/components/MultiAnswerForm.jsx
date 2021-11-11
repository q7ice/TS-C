import React from 'react';
import { Checkbox, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';

function MultiAnswerVariant({
  answer, setAnswerIsChecked,
}) {
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
      <Checkbox
        checked={answer.isTrue}
        onChange={handleChangeIsChecked}
        name="radio-buttons"
        id={generatedId}
      />
      <Typography component="label" htmlFor={generatedId} sx={{ cursor: 'pointer' }}>{answer.value}</Typography>
    </Stack>
  );
}

function MultiAnswerForm({ answers, setAnswers }) {
  const setAnswerIsChecked = (index) => () => {
    const newAnswers = answers.map((item, i) => {
      if (index === i) return { value: item.value, id: item.id, isTrue: !item.isTrue };
      return { value: item.value, id: item.id, isTrue: item.isTrue };
    });
    setAnswers(newAnswers);
  };

  return (
    <Box>
      {
        answers.map((answer, index) => (
          <MultiAnswerVariant
            key={index}
            answer={answer}
            setAnswerIsChecked={setAnswerIsChecked(index)}
          />
        ))
      }
    </Box>
  );
}

export default MultiAnswerForm;
