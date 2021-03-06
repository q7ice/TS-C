import React from 'react';
import {
  Radio, Stack, Tooltip, Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

function SingleAnswerVariant({ answer, isCorrect }) {
  const { userIsTrue, realIsTrue } = answer;
  const generatedId = `${Math.random()}`;

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ mb: 2 }}
    >
      {
        isCorrect ? (
          <Radio
            checked={userIsTrue}
            name="radio-buttons"
            id={generatedId}
            color="success"
          />
        ) : (
          <>
            <Tooltip title="Выбранный ответ">
              <Radio
                checked={userIsTrue}
                name="radio-buttons"
                id={generatedId}
                color="error"
              />
            </Tooltip>
            <Tooltip title="Правильный ответ">
              <Radio
                checked={realIsTrue}
                name="radio-buttons"
                id={generatedId}
                color="success"
              />
            </Tooltip>
          </>
        )
      }
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
            isCorrect={answers.every((item) => item.userIsTrue === item.realIsTrue)}
          />
        ))
      }
    </Box>
  );
}

export default SingleAnswerResult;
