import React from 'react';
import {
  Container, Grid, Paper,
} from '@mui/material';
import Box from '@mui/material/Box';
import Header from '../common/Header';
import Card from '../components/TestCard';
import NewCard from '../components/NewCard';

function TestsPage() {
  return (
    <Box>
      <Header title="Тесты" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: '100vh',
        }}
      >
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={4}>
              <Card
                title="Тест по производным"
                passedCount={0}
                date="19.09.2021"
                isClosed
              />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <Card
                title="Тест по HTML"
                passedCount={1}
                date="19.09.2021"
                isClosed
              />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <NewCard />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
}

export default TestsPage;