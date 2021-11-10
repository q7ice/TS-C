import React from 'react';
import TextAnswerConstructor from './TextAnswerConstructor';
import SingleAnswerConstructor from './SingleAnswerConstructor';
import MultiAnswerConstructor from './MultiAnswerConstructor';
import TextAnswerForm from './TextAnswerForm';

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
      <SingleAnswerConstructor
        answers={answers}
        setAnswers={setAnswers}
      />
    );
  } if (type === 'multi') {
    return (
      <MultiAnswerConstructor
        answers={answers}
        setAnswers={setAnswers}
      />
    );
  }
  return null;
}

export default AnswerForm;
