import { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Paper, Stack } from '@mui/material';
import Header from '../common/Header';
import EmailInput from '../common/Auth/EmailInput';
import ConfirmButton from '../common/Auth/ConfirmButton';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);

  return (
    <Box>
      <Header title="Восстановление пароля" offer="Войти" to="sign-in" />
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
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default ForgotPassword;
