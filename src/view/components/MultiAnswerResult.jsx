import React from 'react';
import {
  Checkbox, Stack, Tooltip, Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

function MultiAnswerVariant({
  answer, isCorrect,
}) {
  const { userIsTrue, realIsTrue } = answer;
  const generatedId = `${Math.random()}`;
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ mb: 2 }}
    >
      {
        isCorrect
          ? null
          : (
            <Tooltip title="Выбранный ответ">
              <Checkbox
                checked={userIsTrue}
                color="error"
                name="radio-buttons"
                id={generatedId}
              />
            </Tooltip>
          )
      }
      <Tooltip title="Правильный ответ">
        <Checkbox
          checked={realIsTrue}
          color="success"
          name="radio-buttons"
          id={generatedId}
        />
      </Tooltip>
      <Typography component="label" htmlFor={generatedId} sx={{ cursor: 'pointer' }}>{answer.value}</Typography>
    </Stack>
  );
}

function MultiAnswerResult({ answers }) {
  const isCorrect = answers.every(({ userIsTrue, realIsTrue }) => userIsTrue === realIsTrue);
  return (
    <Box>
      {
        answers.map((answer, index) => (
          <MultiAnswerVariant
            key={index}
            answer={answer}
            isCorrect={isCorrect}
          />
        ))
      }
    </Box>
  );
}

export default MultiAnswerResult;
