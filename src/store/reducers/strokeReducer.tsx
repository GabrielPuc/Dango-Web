import {
  FETCH_STROKE_INDEX_REQUEST,
  FETCH_STROKE_INDEX_SUCESS,
} from '../types/actionTypes';

import { StrokeIndexActions } from '../types/requestTypes';

const initialState = {};

export default (state = initialState, action: StrokeIndexActions) => {
  switch (action.type) {
    case FETCH_STROKE_INDEX_REQUEST:
      return {
        ...state,
      };
    case FETCH_STROKE_INDEX_SUCESS:
      return {
        ...state,
        strokeIndex: action.strokeIndex.strokeIndex,
      };
    default:
      return {
        ...state,
      };
  }
};
