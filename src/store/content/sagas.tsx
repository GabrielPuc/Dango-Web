import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchWordFailure, fetchWordSuccess } from './actions';
import { FETCH_WORDS_REQUEST } from './actionTypes';
import { Group, Word } from './types';

const getWords = (group: string) =>
  axios.get<Group>(`${import.meta.env.VITE_API_URL}/japanese/${group}`);

function* fetchWordSaga(params) {
  try {
    console.log(params);
    const response = yield call(getWords, params.group);
    yield put(
      fetchWordSuccess({
        words: response.data.content,
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
