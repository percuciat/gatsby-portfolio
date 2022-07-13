import React from "react";
import { changeLang } from "stateManager/actions";
import "../switcher.scss";

const HeaderSwitcherLang = ({ isRu, dispatch }) => {
  const switchLang = () => {
    dispatch(changeLang(!isRu));
  };
  return (
    <>
      <button
        className="switcher switcher--lang"
        onClick={switchLang}
        title={isRu ? "Сменить язык" : "Change language"}
      >
        <span className={`${!isRu && "active"} flag`}></span>
      </button>
    </>
  );
};

export default React.memo(HeaderSwitcherLang);
