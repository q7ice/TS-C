import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainSaga from '../sagas/mainSaga';
import authReducer from '../slices/auth';
import userReducer from '../slices/user';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
  thunk: false,
  serializableCheck: false,
}).concat(sagaMiddleware);

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(mainSaga);

export default store;
