import React from 'react';
import {
  Button, Checkbox, Stack, TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

function MultiAnswerVariant({
  answer, setAnswerText, setAnswerIsChecked, deleteDisabled, deleteAnswer,
}) {
  const handleChangeText = (e) => {
    setAnswerText(e.target.value);
  };
  const handleChangeIsChecked = () => {
    setAnswerIsChecked();
  };
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
      />
      <TextField
        label="Вариант ответа"
        value={answer.value}
        onChange={handleChangeText}
        fullWidth
        multiline
      />
      <Button
        variant="contained"
        disabled={deleteDisabled}
        onClick={deleteAnswer}
      >
        <DeleteIcon />
      </Button>
    </Stack>
  );
}

function MultiAnswerForm({ answers, setAnswers }) {
  const handleClickAddNewAnswer = () => {
    const newAnswerId = Math.max(...answers.map((item) => item.id), 0) + 1;
    const newAnswer = {
      id: newAnswerId,
      isTrue: false,
      value: '',
    };
    setAnswers([...answers, newAnswer]);
  };

  const deleteAnswer = (id) => () => {
    const newAnswers = answers.filter((item) => item.id !== id);
    setAnswers(newAnswers);
  };

  const setAnswerText = (index) => (text) => {
    const newAnswers = answers.map((item, i) => {
      if (index !== i) return item;
      return { value: text, id: item.id, isTrue: item.isTrue };
    });
    setAnswers(newAnswers);
  };

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
        answers.map((answer, index, array) => (
          <MultiAnswerVariant
            key={index}
            answer={answer}
            deleteAnswer={deleteAnswer(answer.id)}
            deleteDisabled={array.length < 3}
            setAnswerText={setAnswerText(index)}
            setAnswerIsChecked={setAnswerIsChecked(index)}
          />
        ))
      }
      <Stack direction="row" justifyContent="center">
        <Button
          variant="contained"
          onClick={handleClickAddNewAnswer}
        >
          Добавить вариант ответа
        </Button>
      </Stack>
    </Box>
  );
}

export default MultiAnswerForm;
