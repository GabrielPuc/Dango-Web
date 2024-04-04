import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_FAILURE,
} from '../types/actionTypes';

import { WordActions } from '../types/requestTypes';
import { WordState } from '../types/modelTypes';

const initialState: WordState = {
  pending: false,
  groups: [],
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
        groups: action.payload.groups,
        error: null,
      };
    case FETCH_WORDS_FAILURE:
      return {
        ...state,
        pending: false,
        groups: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
