import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import {
  Button, CircularProgress,
  Container, Grid, Paper, Stack,
  Typography, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionFormClear from '../../components/Forms/QuestionForm';
import Header from '../../common/Header';
import { saveAnswers, takeTest } from '../../../api/test';

const QuestionForm = memo(QuestionFormClear);

const initialData = [
  {
    id: 1,
    type: 'text',
    description: '2 + 2?',
    answers: [
      { id: 1, value: '' },
    ],
  },
  {
    id: 2,
    type: 'single',
    description: 'Каким знаком отображается минус?',
    answers: [
      { id: 1, value: '-', isTrue: false },
      { id: 2, value: '+', isTrue: false },
    ],
  },
  {
    id: 3,
    type: 'multi',
    description: 'Выберите чётные числа?',
    answers: [
      { id: 1, value: '1', isTrue: false },
      { id: 2, value: '2', isTrue: false },
      { id: 3, value: '3', isTrue: false },
    ],
  },
];

function TestEditPage() {
  const params = useParams();
  const [access, setAccess] = useState(true);
  const [testName, setTestName] = useState('');
  const [answers, setAnswers] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function run() {
      const data = await takeTest(+params.id);
      setTestName(data.name);
      setAnswers(data.questions);
      setAccess(data.access);
      setIsLoading(false);
    }
    run().catch();
  }, []);

  const navigate = useNavigate();
  const handleClickSave = async () => {
    await saveAnswers(answers);
    navigate(`/view-results/${+params.id}`);
  };
  const setQuestion = useCallback((id, question) => {
    setAnswers((prevQuestions) => prevQuestions.map((item) => (id === item.id ? question : item)));
  }, [setAnswers]);

  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;
  return (
    <Box>
      <Header title="Прохождение теста" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: minBarHeight,
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'center',
              fontSize: '1.5rem',
            }}
          >
            {testName}
          </Typography>
          {
            !access ? (
              <Typography
                variant="h6"
                color="error"
                sx={{
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                Доступ к тесту закрыт
              </Typography>
            ) : null
          }

          {
            isLoading ? (
              <Grid container justifyContent="center" sx={{ mt: 2 }}><CircularProgress size={100} /></Grid>
            )
              : answers.map((question, index) => (
                <QuestionForm
                  key={question.id}
                  id={question.id}
                  index={index}
                  type={question.type}
                  description={question.description}
                  answers={question.answers}
                  setQuestion={setQuestion}
                />
              ))
          }
          {
            isLoading ? null
              : (access ? (
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={2}
                  sx={{ mt: 5, mb: 5 }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClickSave}
                  >
                    Сохранить результат
                  </Button>
                </Stack>
              ) : (
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={2}
                  sx={{ mt: 5, mb: 5 }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => { navigate('/tests'); }}
                  >
                    Вернуться к тестам
                  </Button>
                </Stack>
              ))
          }
        </Container>
      </Paper>
    </Box>
  );
}

export default TestEditPage;
