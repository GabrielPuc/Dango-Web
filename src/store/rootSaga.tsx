import { all, fork } from 'redux-saga/effects';

import wordSaga from './sagas/WordsSaga';
import menuOptionsSaga from './sagas/MenuSaga';

export function* rootSaga() {
  yield all([fork(wordSaga), fork(menuOptionsSaga)]);
}
