import React, { createContext, useReducer } from "react";
import { changeReducer } from "./reducer";

const initialState = {
  isRu: true,
  isDark: false,
  isMenuOpen: false,
  widthScreen: null,
};

export const ContextApp = createContext({
  state: initialState,
  dispatch: () => null,
});

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeReducer, initialState);
  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
};
