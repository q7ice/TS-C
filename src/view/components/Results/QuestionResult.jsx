import React from 'react';
import {
  Paper, Typography,
} from '@mui/material';
import AnswerResult from './AnswerResult';

function QuestionResult({
  type, description, answers, cost,
}) {
  let correctAnswer = false;
  if (type === 'text') {
    correctAnswer = answers.value === answers.realValue;
  } else if (type === 'single' || type === 'multi') {
    correctAnswer = answers.every((answer) => answer.userIsTrue === answer.realIsTrue);
  }
  return (
    <Paper
      elevation={12}
      sx={{ padding: 2, mt: 5, mb: 5 }}
    >
      <Typography sx={{ mb: 2 }}>{description}</Typography>
      <AnswerResult
        type={type}
        answers={answers}
      />
      <Typography color="gray" fontSize={16}>
        {`Количество баллов: ${correctAnswer ? cost : 0} из ${cost}`}
      </Typography>
    </Paper>
  );
}

export default QuestionResult;
