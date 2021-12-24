import React from 'react';
import TextAnswerResult from './TextAnswerResult';
import SingleAnswerResult from './SingleAnswerResult';
import MultiAnswerResult from './MultiAnswerResult';

function AnswerResult({ type, answers }) {
  if (type === 'text') {
    return (
      <TextAnswerResult
        answers={answers}
      />
    );
  } if (type === 'single') {
    return (
      <SingleAnswerResult
        answers={answers}
      />
    );
  } if (type === 'multi') {
    return (
      <MultiAnswerResult
        answers={answers}
      />
    );
  }
  return null;
}

export default AnswerResult;
