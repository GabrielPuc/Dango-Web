import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_FAILURE,
  FETCH_VERBS_REQUEST,
  FETCH_VERBS_SUCCESS,
  FETCH_VERBS_FAILURE,
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
  FETCH_STROKE_INDEX_REQUEST,
  FETCH_STROKE_INDEX_SUCESS,
} from './actionTypes';

import { Word, Menu, Group, WordGroup } from './modelTypes';

//RELATED TO WORD REQUESTS

export interface FetchWordSuccessPayload {
  groups: Group[];
}

export interface FetchWordFailurePayload {
  error: string;
}

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

//RELATED TO VERBS REQUESTS

export interface FetchVerbsSuccessPayload {
  groups: WordGroup[];
}

export interface FetchVerbsFailurePayload {
  error: string;
}

export interface FetchVerbsRequest {
  type: typeof FETCH_VERBS_REQUEST;
}

export type FetchVerbsSuccess = {
  type: typeof FETCH_VERBS_SUCCESS;
  payload: FetchVerbsSuccessPayload;
};

export type FetchVerbsFailure = {
  type: typeof FETCH_VERBS_FAILURE;
  payload: FetchWordFailurePayload;
};

export type VerbsActions =
  | FetchVerbsRequest
  | FetchVerbsSuccess
  | FetchVerbsFailure;

//RELATED TO STROKES
export interface FetchStrokeIndexRequest {
  type: typeof FETCH_STROKE_INDEX_REQUEST;
}

export interface FetchStrokeIndexSuccessPayload {
  strokeIndex: Object;
}

export interface FetchStrokeIndexSuccess {
  type: typeof FETCH_STROKE_INDEX_SUCESS;
  strokeIndex: FetchStrokeIndexSuccessPayload;
}

export type StrokeIndexActions =
  | FetchStrokeIndexRequest
  | FetchStrokeIndexSuccess;
