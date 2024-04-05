import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchWordFailure, fetchWordSuccess } from '../actions';
import { FETCH_WORDS_REQUEST } from '../types/actionTypes';
import { Group } from '../types/modelTypes';

const getWordsOf = (group: string) =>
  axios.get<Group>(`${import.meta.env.VITE_API_URL}/japanese/${group}`);

const getWords = () =>
  axios.get<Group>(`${import.meta.env.VITE_API_URL}/japanese/all`);

function* fetchWordSaga(params) {
  try {
    const response = yield call(getWords);
    yield put(
      fetchWordSuccess({
        groups: response.data,
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
