import { CHANGE_THEME, CHANGE_LANG, OPEN_MENU, CLOSE_MENU } from './types';

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
      document.body.style.overflow = 'hidden';
      return {
        ...state,
        isMenuOpen: action.payload
      };
    case CLOSE_MENU:
      document.body.style.overflow = 'auto';
      return {
        ...state,
        isMenuOpen: action.payload
      };
    default:
      return state
  }
};