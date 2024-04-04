import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_FAILURE,
  FETCH_WORDS_SUCCESS,
  FETCH_MENU_REQUEST,
  FETCH_MENU_FAILURE,
  FETCH_MENU_SUCCESS,
} from './types/actionTypes';

import {
  FetchWordsRequest,
  FetchWordsSuccess,
  FetchWordSuccessPayload,
  FetchWordsFailure,
  FetchWordFailurePayload,
  FetchConfigsRequest,
  FetchConfigSuccessPayload,
  FetchConfigFailurePayload,
  FetchConfigsFailure,
  FetchConfigSuccess,
} from './types/requestTypes';

//ACTIONS FOR WORDS
export const fetchWordRequest = (group: string): FetchWordsRequest => ({
  type: FETCH_WORDS_REQUEST,
  group: group,
});

export const fetchWordSuccess = (
  payload: FetchWordSuccessPayload
): FetchWordsSuccess => ({
  type: FETCH_WORDS_SUCCESS,
  payload,
});

export const fetchWordFailure = (
  payload: FetchWordFailurePayload
): FetchWordsFailure => ({
  type: FETCH_WORDS_FAILURE,
  payload,
});

//ACTIONS FOR CONFIGS
export const fetchConfigRequest = (): FetchConfigsRequest => ({
  type: FETCH_MENU_REQUEST,
});

export const fetchConfigsSuccess = (
  payload: FetchConfigSuccessPayload
): FetchConfigSuccess => ({
  type: FETCH_MENU_SUCCESS,
  payload,
});

export const fetchConfigFailure = (
  payload: FetchConfigFailurePayload
): FetchConfigsFailure => ({
  type: FETCH_MENU_FAILURE,
  payload,
});
