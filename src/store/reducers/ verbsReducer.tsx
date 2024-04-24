import {
  FETCH_VERBS_REQUEST,
  FETCH_VERBS_SUCCESS,
  FETCH_VERBS_FAILURE,
} from '../types/actionTypes';

import { VerbsActions } from '../types/requestTypes';
import { VerbGroupsState } from '../types/modelTypes';

const initialState: VerbGroupsState = {
  pending: false,
  groups: [],
  error: null,
};

export default (state = initialState, action: VerbsActions) => {
  switch (action.type) {
    case FETCH_VERBS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_VERBS_SUCCESS:
      return {
        ...state,
        pending: false,
        groups: action.payload.groups,
        error: null,
      };
    case FETCH_VERBS_FAILURE:
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
