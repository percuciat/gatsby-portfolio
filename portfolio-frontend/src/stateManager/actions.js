import { CHANGE_THEME, CHANGE_LANG, OPEN_MENU, CLOSE_MENU, SET_WINDOW_SIZE } from './types';

export function changeTheme(value) {
  return {
    type: CHANGE_THEME,
    payload: value,
  };
}

export function changeLang(value) {
  return {
    type: CHANGE_LANG,
    payload: value,
  };
}

export function openMenu(value) {
  return {
    type: OPEN_MENU,
    payload: value,
  };
}

export function setWindowSize(value) {
  return {
    type: SET_WINDOW_SIZE,
    payload: value
  }
}

export function closeMenu(value) {
  return {
    type: CLOSE_MENU,
    payload: value,
  };
}