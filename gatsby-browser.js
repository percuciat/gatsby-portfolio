/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { GlobalContextProvider } from "./src/stateManager/store";
import "./src/styled/global.scss"

export const wrapRootElement = ({element}) => {
  return (
    <GlobalContextProvider>
      {element}
    </GlobalContextProvider>
  )
};

