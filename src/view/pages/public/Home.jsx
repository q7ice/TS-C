import React from 'react';
import {
  Container, Link, Paper, Stack, Typography, useMediaQuery,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from '../../components/common/Header';

function Home() {
  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;
  return (
    <Box>
      <Header title="Домашняя страница" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: minBarHeight,
        }}
      >
        <Container
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Stack>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link
                component={RouterLink}
                to="/sign-in"
              >
                Войти в аккаунт
              </Link>
            </Typography>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link
                component={RouterLink}
                to="/sign-up"
              >
                Зарегистрироваться
              </Link>
            </Typography>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link
                component={RouterLink}
                to="/forgot-password"
              >
                Восстановить пароль
              </Link>
            </Typography>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link
                component={RouterLink}
                to="/tests"
              >
                Список тестов
              </Link>
            </Typography>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link
                component={RouterLink}
                to="/settings"
              >
                Настройки
              </Link>
            </Typography>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default Home;
