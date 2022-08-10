import React from "react";
import { GlobalContextProvider } from "app/model";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
