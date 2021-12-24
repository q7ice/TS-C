import React from 'react';
import TextAnswerConstructor from './TextAnswerConstructor';
import SingleAnswerConstructor from './SingleAnswerConstructor';
import MultiAnswerConstructor from './MultiAnswerConstructor';

function AnswerConstructor({ type, answers, setAnswers }) {
  if (type === 'text') {
    return (
      <TextAnswerConstructor
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

export default AnswerConstructor;
