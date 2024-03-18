import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.content.pending;

const getWords = (state: AppState) => state.content.words;

const getError = (state: AppState) => state.content.error;

export const getWordsSelector = createSelector(getWords, (words) => words);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
