import { combineReducers } from '@reduxjs/toolkit';
import wordReducer from './reducers/wordReducer';
import menuReducer from './reducers/menuReducer';

const rootReducers = combineReducers({
  content: wordReducer,
  menu: menuReducer,
});

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;
