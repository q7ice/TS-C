import { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/material';
import Header from '../common/Header';
import EmailInput from '../common/Auth/EmailInput';
import ConfirmButton from '../common/Auth/ConfirmButton';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);

  return (
    <Box>
      <Header title="Восстановление пароля" offer="Войти" to="sign-in" />
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
    </Box>
  );
}

export default ForgotPassword;
