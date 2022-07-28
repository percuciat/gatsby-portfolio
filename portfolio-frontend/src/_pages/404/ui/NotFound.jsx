import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";

import useGlobalStore from "shared/hooks/useGlobalStore";

const NotFound = () => {
  /* const { isHover, handleMouseLeave, handleMouseEnter } = useHover(200); */
  const textRuLang = "Страница не найдена...";
  const textEngLang = "Page is out of your request...";
  const { lang } = useGlobalStore();

  return (
    <div className="notFound">
      <div className="cont__principal" tabIndex="0">
        <div className="notFound__number">404</div>
        <div className="cont__error">
          <p className="notFound__title">
            {lang.isRuLang ? textRuLang : textEngLang}
          </p>
        </div>
        <Link to="/" className="btn center-btn">
          {lang.isRuLang ? "На главную" : "Main page"}
        </Link>
      </div>
    </div>
  );
};

export default observer(NotFound);
