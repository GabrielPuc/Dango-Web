import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_FAILURE,
} from '../types/actionTypes';

import { WordActions } from '../types/requestTypes';
import { WordState } from '../types/modelTypes';

const initialState: WordState = {
  pending: false,
  words: [],
  error: null,
};

export default (state = initialState, action: WordActions) => {
  switch (action.type) {
    case FETCH_WORDS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_WORDS_SUCCESS:
      return {
        ...state,
        pending: false,
        words: action.payload.words,
        error: null,
      };
    case FETCH_WORDS_FAILURE:
      return {
        ...state,
        pending: false,
        words: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
