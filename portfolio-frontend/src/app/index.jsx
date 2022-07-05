import React from "react";
import "./styles";

const App = (props) => {
  const { children } = props;
  return <div className="wrapperGlobal">{children}</div>;
};

export default App;
