import React, { memo, useCallback, useState } from 'react';
import {
  Button,
  Container, Paper, Stack,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import QuestionConstructorClear from '../components/QuestionConstructor';
import Header from '../common/Header';

const QuestionConstructor = memo(QuestionConstructorClear);

function TestEditPage() {
  const [questions, setQuestions] = useState([]);
  const [testName, setTestName] = useState('');
  const handleChangeTestName = (e) => {
    setTestName(e.target.value);
  };
  const setQuestion = useCallback((id, question) => {
    setQuestions((prevQuestions) => prevQuestions.map((item) => (id === item.id ? question : item)));
  }, [setQuestions]);
  const deleteQuestion = useCallback((id) => {
    setQuestions((items) => items.filter((item) => id !== item.id));
  }, [setQuestions]);
  const addNewQuestion = useCallback(() => {
    setQuestions((prevQuestions) => {
      const newId = Math.max(...prevQuestions.map((item) => item.id), 0) + 1;
      const newQuestion = {
        id: newId,
        type: 'text',
        description: '',
        cost: 1,
        answers: [
          {
            value: '',
            isTrue: true,
          },
        ],
      };
      return [...prevQuestions, newQuestion];
    });
  }, [setQuestions]);
  const goUpQuestion = useCallback((index) => {
    setQuestions((prevQuestions) => {
      const question = prevQuestions[index];
      const prevQuestion = prevQuestions[index - 1];
      return prevQuestions.map((item, i) => {
        if (index - 1 === i) return question;
        if (index === i) return prevQuestion;
        return item;
      });
    });
  }, [setQuestions]);
  const goDownQuestion = useCallback((index) => {
    setQuestions((prevQuestions) => {
      const question = prevQuestions[index];
      const nextQuestion = prevQuestions[index + 1];
      return prevQuestions.map((item, i) => {
        if (index + 1 === i) return question;
        if (index === i) return nextQuestion;
        return item;
      });
    });
  }, [setQuestions]);

  return (
    <Box>
      <Header title="Редактор теста" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: '100vh',
        }}
      >
        <Container>
          <TextField
            label="Название теста"
            value={testName}
            onChange={handleChangeTestName}
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          />
          {
            questions.map((question, index, array) => (
              <QuestionConstructor
                key={question.id}
                id={question.id}
                index={index}
                type={question.type}
                description={question.description}
                cost={question.cost}
                answers={question.answers}
                setQuestion={setQuestion}
                deleteQuestion={deleteQuestion}
                goUp={goUpQuestion}
                disabledUp={index === 0}
                goDown={goDownQuestion}
                disabledDown={index === array.length - 1}
              />
            ))
          }
          <Stack direction="row" justifyContent="center">
            <Button
              variant="contained"
              onClick={addNewQuestion}
            >
              Добавить новый вопрос
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 5, mb: 5 }}
          >
            <Button
              variant="contained"
              color="success"
              onClick={() => { console.log(questions); }}
            >
              Сохранить
            </Button>
            <Button variant="contained" color="error">Отменить</Button>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default TestEditPage;
