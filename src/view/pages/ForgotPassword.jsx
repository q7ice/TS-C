import { useState } from 'react';
import Box from '@mui/material/Box';
import {
  Container, Link, Paper, Stack, Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../common/Header';
import EmailInput from '../common/Auth/EmailInput';
import ConfirmButton from '../common/Auth/ConfirmButton';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);

  return (
    <Box>
      <Header title="Восстановление пароля" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: '100vh',
        }}
      >
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack>
            <EmailInput
              value={email}
              onChange={handleChangeEmail}
            />
            <ConfirmButton>
              Восстановить пароль
            </ConfirmButton>
            <Typography sx={{ mt: 1, textAlign: 'center' }}>
              <Link
                component={RouterLink}
                to="/sign-in"
              >
                Войти в аккаунт
              </Link>
            </Typography>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default ForgotPassword;
