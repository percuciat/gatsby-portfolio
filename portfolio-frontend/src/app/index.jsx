import React from "react";
/* import { observer } from "mobx-react-lite"; */
import "./styles/index.scss";

const App = (props) => {
  const { children } = props;
  return <div className="wrapperGlobal">{children}</div>;
};

export default App;
