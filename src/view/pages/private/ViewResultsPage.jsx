import React, {
  memo, useEffect, useState,
} from 'react';
import {
  Button, CircularProgress,
  Container, Grid, Paper, Stack,
  Typography, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import { getResults } from '../../../api/test';
import QuestionResultClear from '../../components/results/QuestionResult';

const QuestionResult = memo(QuestionResultClear);

function ViewResultsPage() {
  const params = useParams();
  const [testName, setTestName] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let userResult = 0;
  let maxResult = 0;
  let percentageResult = 0;

  if (!isLoading) {
    userResult = answers.reduce((acc, item) => {
      if (item.type === 'text') {
        if (item.answers[0].value === item.answers[0].realValue) {
          return acc + item.cost;
        }
        return acc;
      }
      if (item.type === 'multi' || item.type === 'single') {
        if (item.answers.every((answer) => answer.userIsTrue === answer.realIsTrue)) {
          return acc + item.cost;
        }
        return acc;
      }
      return acc;
    }, 0);
    maxResult = answers.reduce((acc, item) => acc + item.cost, 0);
    percentageResult = ((userResult / maxResult) * 100).toFixed(2);
  }
  useEffect(() => {
    async function run() {
      const data = await getResults(+params.id);
      setTestName(data.name);
      setAnswers(data.questions);
      setIsLoading(false);
    }
    run().catch();
  }, []);

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/tests');
  };

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
            isLoading ? (
              <Grid container justifyContent="center" sx={{ mt: 2 }}><CircularProgress size={100} /></Grid>
            )
              : answers.map((question, index) => (
                <QuestionResult
                  key={question.id}
                  id={question.id}
                  index={index}
                  type={question.type}
                  description={question.description}
                  answers={question.answers}
                  cost={question.cost}
                />
              ))
          }
          {
            isLoading ? null
              : (
                <>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    sx={{ mt: 5, mb: 5 }}
                  >
                    <Typography>
                      {`Итоговый результат: ${userResult} из ${maxResult} или ${percentageResult}%`}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 5, mb: 5 }}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleClickBack}
                    >
                      Вернуться к тестам
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

export default ViewResultsPage;
