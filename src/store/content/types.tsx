import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_FAILURE,
} from './actionTypes';

export interface Word {
  symbol: string;
  meaning: string;
  pronunciation: string;
  latinbased: string;
  group: string;
}

export interface Group {
  name: string;
  content: Word[];
  version: number;
}

export interface WordState {
  pending: boolean;
  words: Word[];
  error: string | null;
}

export interface FetchWordSuccessPayload {
  words: Word[];
}

export interface FetchWordFailurePayload {
  error: string;
}

export interface FetchWordsRequest {
  type: typeof FETCH_WORDS_REQUEST;
  group;
}

export type FetchWordsSuccess = {
  type: typeof FETCH_WORDS_SUCCESS;
  payload: FetchWordSuccessPayload;
};

export type FetchWordsFailure = {
  type: typeof FETCH_WORDS_FAILURE;
  payload: FetchWordFailurePayload;
};

export type WordActions =
  | FetchWordsRequest
  | FetchWordsSuccess
  | FetchWordsFailure;
