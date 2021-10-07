import { useState } from 'react';
import styles from './Common.module.scss';
import Header from '../../common/Header';
import EmailInput from '../../common/Auth/EmailInput';
import PasswordInput from '../../common/Auth/PasswordInput';
import ConfirmButton from '../../common/Auth/ConfirmButton';
import DefaultLink from '../../common/DefaultLink';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <Header title="Вход" offer="Зарегистрироваться" to="sign-up" />
      <div className={styles.center}>
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
        <DefaultLink
          className={styles.mt1}
          to="forgot-password"
        >
          Забыли пароль?
        </DefaultLink>
      </div>
    </>
  );
}

export default SignIn;
