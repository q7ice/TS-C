import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Container, Grid, Paper, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import Header from '../../common/Header';
import Card from '../../components/TestCard';
import NewCard from '../../components/NewCard';
import { getAllTests } from '../../../api/test';
import { useAlert } from '../../../contexts/AlertContext';

function TestsPage() {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [render, setRender] = useState(false);
  const rerender = () => setRender((prev) => !prev);
  useEffect(() => {
    async function run() {
      const result = await getAllTests();
      setTests(result);
      setIsLoading(false);
    }
    run().catch();
  }, []);
  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;
  return (
    <Box>
      <Header title="Тесты" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: minBarHeight,
        }}
      >
        <Container sx={{ mt: 2 }}>
          <Grid
            spacing={2}
            container
            alignItems="stretch"
          >
            {
              isLoading ? (
                <Grid container justifyContent="center" sx={{ mt: 2 }}><CircularProgress size={100} /></Grid>
              )
                : (
                  tests.map((test) => (
                    <Grid
                      key={test.id}
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      xl={4}
                      alignItems="stretch"
                    >
                      <Card
                        id={test.id}
                        title={test.name}
                        isClosed={!test.isOpen}
                        date={test.createdAt}
                        rerenderTests={rerender}
                      />
                    </Grid>

                  ))
                )
            }
            {
              isLoading ? null : (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  xl={4}
                  alignItems="stretch"
                >
                  <NewCard />
                </Grid>
              )
            }
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
}

export default TestsPage;
