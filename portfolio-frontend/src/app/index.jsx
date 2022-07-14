import React from "react";
import "../styles/index.scss";

const App = (props) => {
  const { children } = props;
  return <div className="wrapperGlobal">{children}</div>;
};

export default App;
