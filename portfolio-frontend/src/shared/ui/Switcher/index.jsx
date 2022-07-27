import React from "react";
import { observer } from "mobx-react-lite";

const Switcher = (props) => {
  const { children, activeClass, customClass, handler, title } = props;

  return (
    <>
      <button
        type="button"
        className={`switcher ${customClass}`}
        onClick={handler}
        title={title}
      >
        <span className={`${activeClass} flag`}>{children}</span>
      </button>
    </>
  );
};

export default Switcher;
