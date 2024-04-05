import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_FAILURE,
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from './actionTypes';

import { Word, Menu, Group } from './modelTypes';

//RELATED TO WORD REQUESTS
//export interface FetchWordSuccessPayload {
//  words: Word[];
//}

export interface FetchWordSuccessPayload {
  groups: Group[];
}

export interface FetchWordFailurePayload {
  error: string;
}

//export interface FetchWordsRequest {
//  type: typeof FETCH_WORDS_REQUEST;
//  group;
//}

export interface FetchWordsRequest {
  type: typeof FETCH_WORDS_REQUEST;
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

//RELATED TO CONFIGS REQUESTS
export interface FetchConfigSuccessPayload {
  menu: Menu[];
}

export interface FetchConfigFailurePayload {
  error: string;
}

export interface FetchConfigsRequest {
  type: typeof FETCH_MENU_REQUEST;
}

export type FetchConfigSuccess = {
  type: typeof FETCH_MENU_SUCCESS;
  payload: FetchConfigSuccessPayload;
};

export type FetchConfigsFailure = {
  type: typeof FETCH_MENU_FAILURE;
  payload: FetchConfigFailurePayload;
};

export type MenuActions =
  | FetchConfigsRequest
  | FetchConfigSuccess
  | FetchConfigsFailure;
