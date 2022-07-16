import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import LayoutMain from "_layouts/LayoutMain/";
import { useHover } from "hooks/useHover";

const NotFoundPage = () => {
  const refBlock = useRef(null);
  useEffect(() => {
    refBlock.current.className = "cont_principal cont_error_active";
  }, []);

  const { isHover, handleMouseLeave, handleMouseEnter } = useHover(200);

  return (
    <LayoutMain>
      <div className="notFound">
        <div
          className="cont_principal"
          ref={refBlock}
          role="button"
          tabIndex="0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`${isHover ? "rotate" : ""} notFound_number`}>
            404
          </div>
          <div className="cont_error">
            <h1 className="notFound_title">Oops</h1>
            <p className="notFound_text">Страница не найдена...</p>
          </div>
          <Link to="/" className="btn center-btn">
            На главную
          </Link>
        </div>
      </div>
    </LayoutMain>
  );
};

export default NotFoundPage;
