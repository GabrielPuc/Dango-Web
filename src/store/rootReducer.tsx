import { combineReducers } from '@reduxjs/toolkit';
import contentReducer from './content/reducer';

const rootReducers = combineReducers({
  content: contentReducer,
});

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;
