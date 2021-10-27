import React, { useState } from 'react';
import {
  FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import questionTypes from '../../../constants/QuestionTypes';
import styles from './QuestionConstructor.module.scss';
import SingleConstructor from '../SingleConstructor';

function QuestionConstructor() {
  const [qType, setQType] = useState(questionTypes.TEXT);
  const [question, setQuestion] = useState('');
  const handleChangeQuestion = (e) => setQuestion(e.target.value);
  const handleChange = (event) => {
    setQType(event.target.value);
  };

  const Answers = () => {
    if (qType === questionTypes.TEXT) {
      return (
        <div className={styles.flex}>
          <TextField
            label="Ответ"
            sx={{ flexGrow: 1 }}
          />
        </div>
      );
    } if (qType === questionTypes.SINGLE) {
      return (
        <div>
          <SingleConstructor />
        </div>
      );
    }
    return null;
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Тип варианта ответа</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={qType}
            label="Тип варианта ответа"
            onChange={handleChange}
            variant="outlined"
          >
            <MenuItem value={questionTypes.TEXT}>Текст</MenuItem>
            <MenuItem value={questionTypes.SINGLE}>Одиночный выбор</MenuItem>
            <MenuItem value={questionTypes.MULTI}>Множественный выбор</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.flex}>
        <TextField
          label="Описание вопроса"
          multiline
          value={question}
          onChange={handleChangeQuestion}
          sx={{ mt: '1rem', mb: '1rem', flexGrow: 1 }}
        >
          {question}
        </TextField>
      </div>
      <Answers />
    </div>
  );
}

export default QuestionConstructor;
