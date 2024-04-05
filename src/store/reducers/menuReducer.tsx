import {
  FETCH_MENU_REQUEST,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from '../types/actionTypes';

import { MenuActions } from '../types/requestTypes';
import { MenuState } from '../types/modelTypes';

const initialState: MenuState = {
  pending: false,
  menuOptions: [],
  error: null,
};

export default (state = initialState, action: MenuActions) => {
  switch (action.type) {
    case FETCH_MENU_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        pending: false,
        menuOptions: action.payload.menu,
        error: null,
      };
    case FETCH_MENU_FAILURE:
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
