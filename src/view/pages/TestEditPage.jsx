import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import styles from './TestEditPage.module.scss';

function TestEditPage() {
  return (
    <div>
      <Header title="Тест по HTML" />
      <Container>
        <div className={styles.wrapper}>
          <Link to="/">Home!</Link>
        </div>
      </Container>
    </div>
  );
}

export default TestEditPage;
