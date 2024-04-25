import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchVerbsFailure, fetchVerbsSuccess } from '../actions';
import { FETCH_VERBS_REQUEST } from '../types/actionTypes';
import { Group } from '../types/modelTypes';

const getVerbs = () =>
  axios.get<Group>(`${import.meta.env.VITE_API_URL}/japanese/verbsdict`);

function* fetchVerbsSaga() {
  try {
    const response = yield call(getVerbs);
    yield put(
      fetchVerbsSuccess({
        groups: response.data.content,
      })
    );
  } catch (e) {
    yield put(
      fetchVerbsFailure({
        error: e.message,
      })
    );
  }
}

function* verbsSaga() {
  yield all([takeLatest(FETCH_VERBS_REQUEST, fetchVerbsSaga)]);
}

export default verbsSaga;
