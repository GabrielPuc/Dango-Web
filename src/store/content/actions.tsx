import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_FAILURE,
  FETCH_WORDS_SUCCESS,
} from './actionTypes';
import {
  FetchWordsRequest,
  FetchWordsSuccess,
  FetchWordSuccessPayload,
  FetchWordsFailure,
  FetchWordFailurePayload,
} from './types';

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
