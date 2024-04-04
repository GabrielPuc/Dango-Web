import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchConfigFailure, fetchConfigsSuccess } from '../actions';
import { FETCH_MENU_REQUEST } from '../types/actionTypes';
import { Config } from '../types/modelTypes';

const getMenuOptions = () =>
  axios.get<Config>(`${import.meta.env.VITE_API_URL}/config/japanese`);

function* fetchMenuOptionsSaga() {
  try {
    const response = yield call(getMenuOptions);
    console.log(response);
    yield put(
      fetchConfigsSuccess({
        menu: response.data.menu,
      })
    );
  } catch (e) {
    yield put(
      fetchConfigFailure({
        error: e.message,
      })
    );
  }
}

function* menuOptionsSaga() {
  yield all([takeLatest(FETCH_MENU_REQUEST, fetchMenuOptionsSaga)]);
}

export default menuOptionsSaga;
