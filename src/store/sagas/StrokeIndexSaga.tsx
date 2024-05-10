import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchStrokeIndexSuccess } from '../actions';
import { FETCH_STROKE_INDEX_REQUEST } from '../types/actionTypes';
import { Group } from '../types/modelTypes';

const getStrokeIndex = () => axios.get<Group>('/kvg-index-minified.json');

function* fetchStrokeIndexSaga() {
  try {
    const response = yield call(getStrokeIndex);
    yield put(
      fetchStrokeIndexSuccess({
        strokeIndex: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchStrokeIndexSuccess({
        strokeIndex: {},
      })
    );
  }
}

function* strokeIndexSaga() {
  yield all([takeLatest(FETCH_STROKE_INDEX_REQUEST, fetchStrokeIndexSaga)]);
}

export default strokeIndexSaga;
