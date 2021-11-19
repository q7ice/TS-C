import React from 'react';
import {
  Radio, Stack, Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

function SingleAnswerVariant({ answer, setAnswerIsChecked }) {
  const { userIsTrue, realIsTrue } = answer;
  const generatedId = `${Math.random()}`;
  let color = 'default';
  if (userIsTrue !== realIsTrue) {
    color = 'error';
  }
  if (realIsTrue) {
    color = 'success';
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{ mb: 2 }}
    >
      <Radio
        checked={realIsTrue || userIsTrue}
        name="radio-buttons"
        id={generatedId}
        color={color}
      />
      <Typography
        htmlFor={generatedId}
        component="label"
      >
        {answer.value}
      </Typography>
    </Stack>
  );
}

function SingleAnswerResult({ answers, setAnswers }) {
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

export default SingleAnswerResult;
