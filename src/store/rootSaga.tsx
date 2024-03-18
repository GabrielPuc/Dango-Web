import { all, fork } from 'redux-saga/effects';

import wordSaga from './content/sagas';

export function* rootSaga() {
  yield all([fork(wordSaga)]);
}
