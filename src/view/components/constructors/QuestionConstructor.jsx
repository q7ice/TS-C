import React from 'react';
import {
  Button,
  Card,
  FormControl, InputLabel,
  MenuItem, Paper, Select, Stack, TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AnswerConstructor from './AnswerConstructor';

function QuestionConstructor({
  type, description, cost, answers,
  setQuestion, deleteQuestion,
  goUp, goDown, disabledDown, disabledUp, id, index,
}) {
  const handleChangeType = (e) => {
    const newType = e.target.value;

    let newAnswers;
    if (newType === 'text') {
      newAnswers = [{ id: 1, value: '', isTrue: true }];
    } else if (newType === 'single') {
      newAnswers = [{ id: 1, value: '', isTrue: false }, { id: 2, value: '', isTrue: false }];
    } else if (newType === 'multi') {
      newAnswers = [{ id: 1, value: '', isTrue: false }, { id: 2, value: '', isTrue: false }];
    }

    const question = {
      id,
      type: newType,
      description,
      cost,
      answers: newAnswers,
    };
    setQuestion(id, question);
  };

  const handleChangeDescription = (e) => {
    const question = {
      id,
      type,
      description: e.target.value,
      cost,
      answers,
    };
    setQuestion(id, question);
  };

  const handleChangeCost = (e) => {
    const question = {
      id,
      type,
      description,
      cost: `${+e.target.value}`,
      answers,
    };
    setQuestion(id, question);
  };

  const setAnswers = (newAnswers) => {
    const question = {
      id,
      type,
      description,
      cost,
      answers: newAnswers,
    };
    setQuestion(id, question);
  };

  const handleClickDelete = () => {
    deleteQuestion(id);
  };

  const handleClickGoUp = () => {
    goUp(index);
  };
  const handleClickGoDown = () => {
    goDown(index);
  };

  return (
    <Paper
      elevation={12}
      sx={{ padding: 2, mt: 5, mb: 5 }}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Button
          disabled={disabledUp}
          color="secondary"
          variant="contained"
        >
          <ArrowUpwardIcon
            onClick={handleClickGoUp}
          />
        </Button>
        <Button
          disabled={disabledDown}
          color="secondary"
          variant="contained"
        >
          <ArrowDownwardIcon
            onClick={handleClickGoDown}
          />
        </Button>
        <Button
          onClick={handleClickDelete}
          color="error"
          variant="contained"
        >
          <DeleteIcon />
        </Button>
      </Stack>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">?????? ???????????????? ????????????</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="?????? ???????????????? ????????????"
          onChange={handleChangeType}
          variant="outlined"
        >
          <MenuItem value="text">??????????</MenuItem>
          <MenuItem value="single">?????????????????? ??????????</MenuItem>
          <MenuItem value="multi">?????????????????????????? ??????????</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="???????????????? ??????????????"
        multiline
        fullWidth
        value={description}
        onChange={handleChangeDescription}
        sx={{ mt: 2, mb: 2, flexGrow: 1 }}
      />
      <TextField
        label="??????-???? ????????????"
        type="number"
        fullWidth
        value={cost}
        onChange={handleChangeCost}
        sx={{ mb: 2 }}
      />
      <AnswerConstructor
        type={type}
        answers={answers}
        setAnswers={setAnswers}
      />
    </Paper>
  );
}

export default QuestionConstructor;
