import React from "react";
import { observer } from "mobx-react-lite";
import useGlobalStore from "shared/hooks/useGlobalStore";

const PreloaderForm = () => {
  const { lang } = useGlobalStore();
  return (
    <>
      <div className="preloaderForm__wrapper">
        <div className="preloaderForm__container">
          <div className="preloaderForm__container-item yellow" />
          <div className="preloaderForm__container-item red" />
          <div className="preloaderForm__container-item blue" />
          <div className="preloaderForm__container-item violet" />
        </div>
        <p>
          {lang.isRuLang
            ? "Сообщение отправляется..."
            : "Message is sending..."}
        </p>
      </div>
    </>
  );
};

export default observer(PreloaderForm);
