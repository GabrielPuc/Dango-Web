import { createSelector } from 'reselect';

import { AppState } from './rootReducer';

import { Word } from './types/modelTypes';

const getPending = (state: AppState) => state.content.pending;

const getWords = (state: AppState) => state.content.groups;

const getError = (state: AppState) => state.content.error;

const getMenuPending = (state: AppState) => state.menu.pending;

const getMenu = (state: AppState) => state.menu.menuOptions;

const getMenuError = (state: AppState) => state.menu.error;

const getVerbsPending = (state: AppState) => state.verbGroups.pending;

const getVerbs = (state: AppState) => state.verbGroups.groups;

const getVerbsError = (state: AppState) => state.verbGroups.error;

const getStrokeIndex = (state: AppState) => state.strokeIndex;

//WORDS
export const getWordsSelector = createSelector(getWords, (words) => words);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);

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

//VERBS
export const getVerbsSelector = createSelector(getVerbs, (verbs) => verbs);
export const getVerbsMergedSelector = createSelector(getVerbs, (verbGroups) => {
  let mergedVerbs = [];
  verbGroups.forEach((verbGroup) => {
    mergedVerbs = mergedVerbs.concat(verbGroup.content);
  });
  return mergedVerbs;
});

export const getVerbsPendingSelector = createSelector(
  getVerbsPending,
  (pending) => pending
);

export const getVerbsErrorSelector = createSelector(
  getVerbsError,
  (error) => error
);

//MENU
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

export const getWordsMergedSelector = createSelector(getWords, (verbGroups) => {
  let mergedVerbs = [];
  verbGroups.forEach((verbGroup) => {
    mergedVerbs = mergedVerbs.concat(verbGroup.content);
  });
  return mergedVerbs;
});

export const getGroupMergedSelector = (content: string) => {
  return createSelector(getWords, (wordGroups) => {
    const groups = wordGroups.filter((obj) => {
      return obj.name === content.toLocaleLowerCase();
    });
    if (groups.length > 0) {
      let mergedGroups = [];
      groups[0]['content'].forEach((group) => {
        group.content.map((value) => (value['group'] = group.name));
        mergedGroups = mergedGroups.concat(group.content);
      });
      return mergedGroups;
    } else {
      return [];
    }
  });
};

//STROKES INDEX

const createStrokesIndexSelector = () => {
  return createSelector(
    getStrokeIndex,
    (strokesIndex) => strokesIndex.strokeIndex
  );
};

export const getStrokesIndexSelector = () => createStrokesIndexSelector();
