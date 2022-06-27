/* import React from "react";
import SwitcherTheme from "./SwitcherTheme";
import SwitcherLang from "./SwitcherLang";
import "./switcher.scss";

export const Switchers = ({isRu, isDark, dispatch}) => {
  return <>
    <SwitcherTheme  isDark={isDark}
                    isRu={isRu}
                    dispatch={dispatch}/>
    <SwitcherLang isRu={isRu}
                  dispatch={dispatch}/>
  </>
}; */

import { HeaderSwitchLang } from "./HeaderSwitchLang";
import { HeaderSwitchTheme } from "./HeaderSwitchTheme";

export { HeaderSwitchLang, HeaderSwitchTheme };
