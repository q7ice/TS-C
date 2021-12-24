import React, { useState } from 'react';
import {
  Container, Link, Paper, Stack, Typography, useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { registerAdmin } from '../../../api/auth';
import Header from '../../components/common/Header';
import EmailInput from '../../components/common/auth/EmailInput';
import PasswordInput from '../../components/common/auth/PasswordInput';
import ConfirmButton from '../../components/common/auth/ConfirmButton';
import { useAlert } from '../../../contexts/AlertContext';

function AdminSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [secret, setSecret] = useState('');

  const { showError, showSuccess } = useAlert();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeRepeatPassword = (e) => setRepeatPassword(e.target.value);
  const handleChangeSecret = (e) => setSecret(e.target.value);

  const navigate = useNavigate();
  const handleClickSubmit = async () => {
    if (password === repeatPassword) {
      const answer = await registerAdmin(email, password, secret);
      if (answer.error) {
        showError(answer.error);
      } else {
        showSuccess(answer.message);
      }
      navigate('/sign-in');
    }
  };

  const minBarHeight = `calc(100vh - ${useMediaQuery('(min-width:600px)') ? '66px' : '58px'})`;

  return (
    <Box>
      <Header title="Регистрация" />
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
            <PasswordInput
              value={secret}
              onChange={handleChangeSecret}
              label="Ключ приглашения"
            />
            <ConfirmButton onClick={handleClickSubmit}>
              Зарегистрироваться
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

export default AdminSignUp;
