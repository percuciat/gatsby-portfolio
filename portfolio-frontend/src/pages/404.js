import React from "react";
import { Link } from "gatsby";
import Layout from "../layout/Layout";
import { useHover } from "../hooks/useHover";
import "../styled/notFound.scss";


const NotFoundPage = () => {
  const refBlock = React.useRef(null);
  React.useEffect(() => {
    refBlock.current.className= "cont_principal cont_error_active";
  }, []);

  const { isHover, handleMouseLeave, handleMouseEnter } = useHover(200);

  return (
    <Layout>
      <div className="notFound">
        <div className="cont_principal"
             ref={refBlock}
             role="button"
             tabIndex="0"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
          <div className={`${isHover ? 'rotate' : ''} notFound_number`}>404</div>
          <div className="cont_error">
            <h1 className="notFound_title">Oops</h1>
            <p className="notFound_text">Страница не найдена...</p>
          </div>
          <Link to="/" className="btn center-btn">На главную</Link>
        </div>
      </div>
    </Layout>
  )
};

export default NotFoundPage;
