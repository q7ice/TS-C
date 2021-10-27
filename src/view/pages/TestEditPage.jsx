import React, { useState } from 'react';
import { Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Header from '../common/Header';
import styles from './TestEditPage.module.scss';
import questionTypes from '../../constants/QuestionTypes';
import QuestionConstructor from '../components/QuestionConstructor';

function TestEditPage({ name }) {
  const [testName, setTestName] = useState('');
  const [questions, setQuestions] = useState([]);
  const handleAddNewQuestion = () => {
    const newQuestion = {
      id: Math.max(...questions) + 1,
      type: questionTypes.SINGLE,

    };
    questions.push(newQuestion);
  };
  const handleChangeTestName = (e) => setTestName(e.target.value);
  return (
    <div>
      <Header title={testName} />
      <Container>
        <div className={styles.wrapper}>
          <div className={classNames(styles.center, styles.testName)}>
            <TextField
              type="text"
              label="Имя теста"
              sx={{ flexGrow: 1 }}
              value={testName}
              onChange={handleChangeTestName}
            />
          </div>
          <div>
            <QuestionConstructor />
            <QuestionConstructor />
          </div>
          <div className={styles.center}>
            <Button className={styles.btn} variant="contained">Добавить новый вопрос</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TestEditPage;
