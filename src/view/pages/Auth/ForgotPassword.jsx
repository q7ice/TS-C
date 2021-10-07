import { useState } from 'react';
import Header from '../../common/Header';
import EmailInput from '../../common/Auth/EmailInput';
import ConfirmButton from '../../common/Auth/ConfirmButton';
import styles from './Common.module.scss';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);

  return (
    <>
      <Header title="Восстановление пароля" offer="Войти" to="sign-in" />
      <div className={styles.center}>
        <EmailInput
          value={email}
          onChange={handleChangeEmail}
        />
        <ConfirmButton>
          Восстановить пароль
        </ConfirmButton>
      </div>
    </>
  );
}

export default ForgotPassword;
