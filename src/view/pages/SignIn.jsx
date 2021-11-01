import { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import EmailInput from '../common/Auth/EmailInput';
import PasswordInput from '../common/Auth/PasswordInput';
import ConfirmButton from '../common/Auth/ConfirmButton';
import DefaultLink from '../common/DefaultLink';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <Box>
      <Header title="Вход" offer="Зарегистрироваться" to="sign-up" />
      <Container
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Stack>
          <EmailInput
            value={email}
            onChange={handleChangeEmail}
          />
          <PasswordInput
            value={password}
            onChange={handleChangePassword}
            label="Пароль"
          />
          <ConfirmButton>
            Войти
          </ConfirmButton>
          <Typography sx={{ mt: 1, textAlign: 'center' }}>
            <Link to="/forgot-password">Забыли пароль?</Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default SignIn;
