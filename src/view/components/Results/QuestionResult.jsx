import React from 'react';
import {
  Paper, Typography,
} from '@mui/material';
import AnswerResult from './AnswerResult';

function QuestionResult({
  type, description, answers, id,
}) {
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
    </Paper>
  );
}

export default QuestionResult;
