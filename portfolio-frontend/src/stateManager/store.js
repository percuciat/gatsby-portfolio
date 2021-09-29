import React from "react";
import { changeReducer } from "./reducer";

const initialState = {
  isRu: true,
  isDark: false,
  isMenuOpen: false,
  widthScreen: window.innerWidth
};

export const ContextApp = React.createContext({
  state: initialState,
  dispatch: () => null
});


export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(changeReducer, initialState);
  return (
    <ContextApp.Provider value={{state, dispatch}}>
      {children}
    </ContextApp.Provider>
    )
};
