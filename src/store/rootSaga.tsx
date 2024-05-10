import { all, fork } from 'redux-saga/effects';

import wordSaga from './sagas/WordsSaga';
import menuOptionsSaga from './sagas/MenuSaga';
import verbsSaga from './sagas/VerbsSaga';
import strokeIndexSaga from './sagas/StrokeIndexSaga';

export function* rootSaga() {
  yield all([
    fork(wordSaga),
    fork(menuOptionsSaga),
    fork(verbsSaga),
    fork(strokeIndexSaga),
  ]);
}
