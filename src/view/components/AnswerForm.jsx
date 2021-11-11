import React from 'react';
import TextAnswerForm from './TextAnswerForm';
import SingleAnswerForm from './SingleAnswerForm';
import MultiAnswerForm from './MultiAnswerForm';

function AnswerForm({ type, answers, setAnswers }) {
  if (type === 'text') {
    return (
      <TextAnswerForm
        answers={answers}
        setAnswers={setAnswers}
      />
    );
  } if (type === 'single') {
    return (
      <SingleAnswerForm
        answers={answers}
        setAnswers={setAnswers}
      />
    );
  } if (type === 'multi') {
    return (
      <MultiAnswerForm
        answers={answers}
        setAnswers={setAnswers}
      />
    );
  }
  return null;
}

export default AnswerForm;
