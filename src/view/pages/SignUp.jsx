import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Paper, Stack } from '@mui/material';
import Header from '../common/Header';
import PasswordInput from '../common/Auth/PasswordInput';
import EmailInput from '../common/Auth/EmailInput';
import ConfirmButton from '../common/Auth/ConfirmButton';
import { registerUser } from '../../api/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeRepeatPassword = (e) => setRepeatPassword(e.target.value);

  const handleClickSubmit = async () => {
    if (password === repeatPassword) {
      await registerUser(email, password);
    }
  };

  return (
    <Box>
      <Header title="Регистрация" offer="Войти" to="sign-in" />
      <Paper
        square
        sx={{
          border: '1px solid transparent',
          minHeight: '100vh',
        }}
      >
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
            <PasswordInput
              value={repeatPassword}
              onChange={handleChangeRepeatPassword}
              label="Повтор пароля"
            />
            <ConfirmButton onClick={handleClickSubmit}>
              Зарегистрироваться
            </ConfirmButton>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default SignUp;
