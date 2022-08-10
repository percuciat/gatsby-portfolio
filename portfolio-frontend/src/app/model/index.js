import React, { createContext } from "react";
import { configure } from "mobx";
import { LangStore } from "features/switchLang";
import { ThemeStore } from "features/switchTheme";
/* configure({ enforceActions: "observed" }); */

class RootStore {
  constructor() {
    this.lang = new LangStore();
    this.theme = new ThemeStore();
  }
}

const store = new RootStore();

export const GlobalContext = createContext(store);

export const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
