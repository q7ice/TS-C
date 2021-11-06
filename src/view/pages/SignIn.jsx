import { useState } from 'react';
import Box from '@mui/material/Box';
import {
  Container, Link, Paper, Stack, Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Header from '../common/Header';
import EmailInput from '../common/Auth/EmailInput';
import PasswordInput from '../common/Auth/PasswordInput';
import ConfirmButton from '../common/Auth/ConfirmButton';
import { loginUser } from '../../api/auth';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleClickSubmit = async () => {
    const result = await loginUser(email, password);
    console.log(result);
  };

  return (
    <Box>
      <Header title="Вход" />
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
            <ConfirmButton onClick={handleClickSubmit}>
              Войти
            </ConfirmButton>
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
                to="/sign-up"
              >
                Зарегистрироваться
              </Link>
            </Typography>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default SignIn;
