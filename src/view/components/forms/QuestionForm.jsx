import React from 'react';
import {
  Paper, Typography,
} from '@mui/material';
import AnswerForm from './AnswerForm';

function QuestionForm({
  type, description, answers,
  setQuestion, id,
}) {
  const setAnswers = (newAnswers) => {
    const question = {
      id,
      type,
      description,
      answers: newAnswers,
    };
    setQuestion(id, question);
  };

  return (
    <Paper
      elevation={12}
      sx={{ padding: 2, mt: 5, mb: 5 }}
    >
      <Typography sx={{ mb: 2 }}>{description}</Typography>
      <AnswerForm
        type={type}
        answers={answers}
        setAnswers={setAnswers}
      />
    </Paper>
  );
}

export default QuestionForm;
