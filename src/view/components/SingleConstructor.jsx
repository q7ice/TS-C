import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './SingleConstructor.module.scss';

function SingleConstructor() {
  const [answers, setAnswers] = useState([
    { id: 1 },
  ]);
  return (
    <div className={styles.wrapper}>
      <div>
        {answers.map((item) => (
          <div key={item.id} className={styles.flexRow}>
            <TextField
              label="Ответ"
            />
            <TextField
              label="Кол-во баллов"
            />
            <Button variant="outlined"><DeleteIcon /></Button>
          </div>
        ))}
      </div>
      <div className={styles.flexCenter}>
        <Button variant="outlined">+</Button>
      </div>
    </div>
  );
}

export default SingleConstructor;
