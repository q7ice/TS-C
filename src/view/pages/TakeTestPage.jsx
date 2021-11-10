import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import {
  Button,
  Container, Paper, Stack,
  TextField, Typography, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import QuestionConstructorClear from '../components/QuestionConstructor';
import Header from '../common/Header';
import {
  createNewTest, editTest, getOneTest,
} from '../../api/test';

const QuestionConstructor = memo(QuestionConstructorClear);

function TestEditPage() {
  const params = useParams();
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function run() {
      const data = await getOneTest(+params.id);
      setTestName(data.name);
      setQuestions(data.questions);
    }
    if (params.id !== 'new') {
      run().catch();
    }
  }, []);

  const navigate = useNavigate();
  const handleClickSave = async () => {
    // if (params.id === 'new') {
    //   const success = await createNewTest(testName, questions);
    //   if (success) {
    //     navigate('/tests');
    //   }
    // } else {
    //   const success = await editTest(params.id, testName, questions);
    //   if (success) {
    //     navigate('/tests');
    //   }
    // }
  };
  const handleChangeTestName = (e) => {
    setTestName(e.target.value);
  };
  const setQuestion = useCallback((id, question) => {
    setQuestions((prevQuestions) => prevQuestions.map((item) => (id === item.id ? question : item)));
  }, [setQuestions]);

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
          <Typography>{testName}</Typography>
          {
            questions.map((question, index, array) => (
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
        </Container>
      </Paper>
    </Box>
  );
}

export default TestEditPage;
