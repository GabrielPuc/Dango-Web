import { createSelector } from 'reselect';

import { AppState } from './rootReducer';

const getPending = (state: AppState) => state.content.pending;

//const getWords = (state: AppState) => state.content.words;

const getWords = (state: AppState) => state.content.groups;

const getError = (state: AppState) => state.content.error;

const getMenuPending = (state: AppState) => state.menu.pending;

const getMenu = (state: AppState) => state.menu.menuOptions;

const getMenuError = (state: AppState) => state.menu.error;

export const getWordsSelector = createSelector(getWords, (words) => words);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getMenuSelector = createSelector(
  getMenu,
  (menuOptions) => menuOptions
);

export const getMenuPendingSelector = createSelector(
  getMenuPending,
  (pending) => pending
);

export const getMenuErrorSelector = createSelector(
  getMenuError,
  (error) => error
);

const createSelectorFor = (content: string) => {
  return createSelector(getMenu, (menuOptions) => {
    const section = menuOptions.filter((obj) => {
      return obj.name === content;
    });

    if (section.length > 0) {
      return section[0]['content'];
    } else {
      return [];
    }
  });
};

export const getSelectorFor = (value: string) => createSelectorFor(value);

const createGroupSelectorFor = (content: string) => {
  return createSelector(getWords, (groups) => {
    const section = groups.filter((obj) => {
      return obj.name === content.toLocaleLowerCase();
    });
    if (section.length > 0) {
      return section[0]['content'];
    } else {
      return [];
    }
  });
};

export const getGroupSelectorFor = (value: string) =>
  createGroupSelectorFor(value);
