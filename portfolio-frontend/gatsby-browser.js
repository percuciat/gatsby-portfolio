import React from "react";
import { GlobalContextProvider } from "app/model";


export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
}; 
/* export const WrapRootElement = ({ element }) => {
  const globalStore = useLocalObservable(GlobalUiStore);
  return (
    <GlobalContext.Provider globalStore={globalStore}>
      {element}
    </GlobalContext.Provider>
  );
}; */
