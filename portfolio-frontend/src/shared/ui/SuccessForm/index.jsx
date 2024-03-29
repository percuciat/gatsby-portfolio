import React from "react";
import { observer } from "mobx-react-lite";
import useGlobalStore from "shared/hooks/useGlobalStore";

const SuccessForm = (props) => {
  const text = "Ваше сообщение успешно отправлено.";
  const textEng = "Your message has been successfully sent.";
  const { lang } = useGlobalStore();
  return (
    <>
      <div className="successForm">
        <svg
          width="181"
          height="150"
          viewBox="0 0 181 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="90.5" cy="90.5" r="90.5" fill="#663399" />
          <path
            d="M134.207 58L110.076 84.4215L85.9459 110.843L57.0017 89.7336"
            stroke="white"
            strokeWidth="10"
          />
        </svg>
        <h4 className="successForm__title">
          {lang.isRuLang ? "Отлично!" : "Excellent!"}
        </h4>
        <p className="successForm__text">{lang.isRuLang ? text : textEng}</p>
        <a
          href="https://t.me/percuciat"
          rel="noreferrer"
          target="_blank"
          className="btn"
        >
          {lang.isRuLang ? "Написать в телеграм" : "Write on Telegram"}
        </a>
      </div>
    </>
  );
};

export default observer(SuccessForm);
