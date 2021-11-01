import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth';
import userReducer from '../slices/user';
import testReducer from '../slices/test';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  test: testReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
