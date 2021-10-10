import React from 'react';
import {
  CardContent, Container, Grid, Paper, Typography,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
