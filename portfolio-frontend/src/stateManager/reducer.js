import { CHANGE_THEME, CHANGE_LANG, OPEN_MENU, CLOSE_MENU, SET_WINDOW_SIZE } from './types';

export const changeReducer = (state, action)  => {
  switch(action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        isRu: action.payload
      };
    case CHANGE_THEME:
      return {
        ...state,
        isDark: action.payload
      };
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: action.payload
      };
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: action.payload
      };
    case SET_WINDOW_SIZE:
      return {
        ...state,
        widthScreen: action.payload
      };
    default:
      return state
  }
};