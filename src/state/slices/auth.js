import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

const options = {
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
    },
  },
};
const slice = createSlice(options);

export const { login } = slice.actions;
export default slice.reducer;
