import React from 'react';
import {
  Radio, Stack, Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

function SingleAnswerVariant({ answer }) {
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

function SingleAnswerResult({ answers }) {
  return (
    <Box>
      {
        answers.map((answer, index) => (
          <SingleAnswerVariant
            key={index}
            answer={answer}
          />
        ))
      }
    </Box>
  );
}

export default SingleAnswerResult;
