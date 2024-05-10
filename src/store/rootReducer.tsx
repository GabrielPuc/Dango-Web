import { combineReducers } from '@reduxjs/toolkit';
import wordReducer from './reducers/wordReducer';
import menuReducer from './reducers/menuReducer';
import VerbsReducer from './reducers/verbsReducer';
import strokeReducer from './reducers/strokeReducer';

const rootReducers = combineReducers({
  content: wordReducer,
  menu: menuReducer,
  verbGroups: VerbsReducer,
  strokeIndex: strokeReducer,
});

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;
