import React from 'react';
import {
  Container,
} from '@mui/material';
import Header from '../common/Header';
import styles from './TestsPage.module.scss';
import Card from '../components/Card/Card';
import NewCard from '../components/Card/NewCard';

function TestsPage() {
  return (
    <div>
      <Header title="Тесты" />
      <Container>
        <div className={styles.cardContainer}>
          <Card
            title="Тест по производным"
            passedCount={0}
            date="19.09.2021"
            isClosed
          />
          <Card
            title="Тест по HTML"
            passedCount={1}
            date="19.09.2021"
            isClosed
          />
          <NewCard />
        </div>
      </Container>
    </div>
  );
}

export default TestsPage;
