import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchWordFailure, fetchWordSuccess } from './actions';
import { FETCH_WORDS_REQUEST } from './actionTypes';
import { Word } from './types';

const getWords = () =>
  axios.get<Word[]>(`${import.meta.env.VITE_API_URL}/japanese/`);

function* fetchWordSaga() {
  try {
    const response = yield call(getWords);
    yield put(
      fetchWordSuccess({
        words: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchWordFailure({
        error: e.message,
      })
    );
  }
}

function* wordSaga() {
  yield all([takeLatest(FETCH_WORDS_REQUEST, fetchWordSaga)]);
}

export default wordSaga;
