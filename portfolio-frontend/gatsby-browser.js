import React from "react"
import { GlobalContextProvider } from "./src/stateManager/store";


export const wrapRootElement = ({element}) => {
  return (
    <GlobalContextProvider>
      {element}
    </GlobalContextProvider>
  )
};