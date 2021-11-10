import React from 'react';
import {
  Button,
  Card,
  FormControl, InputLabel,
  MenuItem, Paper, Select, Stack, TextField, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AnswerConstructor from './AnswerConstructor';

function QuestionConstructor({
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
      <Typography>{description}</Typography>
      <AnswerConstructor
        type={type}
        answers={answers}
        setAnswers={setAnswers}
      />
    </Paper>
  );
}

export default QuestionConstructor;
