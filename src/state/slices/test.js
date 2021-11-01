import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  name: '',
  questions: [
    {
      id: 1,
      type: 'text',
      description: 'Сколько будет 2 + 2?',
      cost: 1,
      answers: [
        {
          id: 1,
          value: '4',
          isTrue: true,
        },
      ],
    },
    {
      id: 2,
      type: 'single',
      description: 'Сколько будет 1 + 1?',
      cost: 1,
      answers: [
        {
          id: 1,
          value: '2',
          isTrue: true,
        },
        {
          id: 2,
          value: '3',
          isTrue: false,
        },
        {
          id: 3,
          value: '1',
          isTrue: false,
        },
        {
          id: 4,
          value: '0',
          isTrue: false,
        },
      ],
    },
    {
      id: 3,
      type: 'multi',
      description: 'Какие из этих чисел делятся на 2?',
      cost: 1,
      answers: [
        {
          id: 1,
          value: '2',
          isTrue: true,
        },
        {
          id: 2,
          value: '3',
          isTrue: false,
        },
        {
          id: 3,
          value: '4',
          isTrue: true,
        },
        {
          id: 4,
          value: '5',
          isTrue: false,
        },
        {
          id: 5,
          value: '7',
          isTrue: false,
        },
      ],
    },
  ],
};

const options = {
  name: 'test',
  initialState,
  reducers: {
    changeTestName(state, action) {
      state.name = action.payload;
    },
    createQuestion(state) {
      const newQuestionId = Math.max(...state.questions.map((item) => item.id), 0) + 1;
      const question = {
        id: newQuestionId,
        type: 'text',
        description: '',
        cost: 1,
        answer: '',
      };
      state.questions.push(question);
    },
  },
};
const slice = createSlice(options);

export const { changeTestName, createQuestion } = slice.actions;
export default slice.reducer;
