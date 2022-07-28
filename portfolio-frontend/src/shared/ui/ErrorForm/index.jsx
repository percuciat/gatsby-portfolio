import React from "react";
import { observer } from "mobx-react-lite";
import useGlobalStore from "shared/hooks/useGlobalStore";

const ErrorForm = (props) => {
  const text = "Произошла ошибка при отправке...";
  const textEng = "Sorry, error has happened...";
  const { lang } = useGlobalStore();

  return (
    <div className="errorMsg">
      <p className="errorMsg__text">
        {lang.isRuLang ? text : textEng}{" "}
        <span role="img" aria-label="error">
          😔
        </span>
      </p>
    </div>
  );
};

export default observer(ErrorForm);
