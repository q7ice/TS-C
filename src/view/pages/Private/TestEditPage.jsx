import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import {
  Button, CircularProgress,
  Container, Grid, Paper, Stack,
  TextField, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionConstructorClear from '../../components/Constructors/QuestionConstructor';
import Header from '../../common/Header';
import {
  createNewTest, editTest, getOneTest,
} from '../../../api/test';

const QuestionConstructor = memo(QuestionConstructorClear);

function TestEditPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await getOneTest(+params.id);
      setTestName(data.name);
      setQuestions(data.questions);
      setIsLoading(false);
    }
    if (params.id !== 'new') {
      run().catch();
    } else {
      setIsLoading(false);
    }
  }, []);

  const navigate = useNavigate();
  const handleClickSave = async () => {
    if (params.id === 'new') {
      const success = await createNewTest(testName, questions);
      if (success) {
        navigate('/tests');
      }
    } else {
      const success = await editTest(params.id, testName, questions);
      if (success) {
        navigate('/tests');
      }
    }
  };
  const handleCancel = () => {
    navigate('/tests');
  };

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

  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;
  return (
    <Box>
      <Header title="Редактор теста" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: minBarHeight,
        }}
      >
        <Container>
          {
            isLoading ? null
              : (
                <TextField
                  label="Название теста"
                  value={testName}
                  onChange={handleChangeTestName}
                  fullWidth
                  sx={{ mt: 2, mb: 2 }}
                />
              )
          }
          {
            isLoading ? (
              <Grid container justifyContent="center" sx={{ mt: 2 }}><CircularProgress size={100} /></Grid>
            )
              : questions.map((question, index, array) => (
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
          {

            isLoading ? null
              : (
                <>
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
                      onClick={handleClickSave}
                    >
                      Сохранить
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleCancel}
                    >
                      Отменить
                    </Button>
                  </Stack>
                </>
              )
          }
        </Container>
      </Paper>
    </Box>
  );
}

export default TestEditPage;
