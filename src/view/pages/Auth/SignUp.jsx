import { useState } from 'react';
import Header from '../../common/Header';
import PasswordInput from '../../common/Auth/PasswordInput';
import EmailInput from '../../common/Auth/EmailInput';
import styles from '../Common.module.scss';
import ConfirmButton from '../../common/Auth/ConfirmButton';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeRepeatPassword = (e) => setRepeatPassword(e.target.value);

  return (
    <>
      <Header title="Регистрация" offer="Войти" to="sign-in" />
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
        <PasswordInput
          value={repeatPassword}
          onChange={handleChangeRepeatPassword}
          label="Повтор пароля"
        />
        <ConfirmButton>
          Зарегистрироваться
        </ConfirmButton>
      </div>
    </>
  );
}

export default SignUp;
