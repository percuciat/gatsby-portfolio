import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

import { makeAutoObservable, observable, configure, action } from "mobx";

configure({ enforceActions: "observed" });

const UiState = {
  isRu: true,
  isDark: false,

  switchLang() {
    this.isRu = !this.isRu;
  },

  switchTheme() {
    this.isDark = !this.isDark;
  },
};

export const GlobalUiStore = observable(
  UiState,
  {
    switchLang: action("Change Lang"),
    switchTheme: action("Change Theme"),
  },
  {
    name: "GlobalUi",
  }
);

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const globalStore = useLocalObservable(GlobalUiStore);
  return (
    <GlobalContext.Provider value={globalStore}>
      {children}
    </GlobalContext.Provider>
  );
};