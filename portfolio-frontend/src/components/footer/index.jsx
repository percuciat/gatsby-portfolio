import React from "react";
import { SocialLinks }  from '..';

import "./footer.scss";

const Footer = ({isDark, isRu}) => {
  return (
    <footer className={`${isDark ? 'dark' : ''} footer`}>
      <div className="container footer__wrapper">
        <SocialLinks styleClass="footer__links"/>
        <h4 className="footer__title">
          copyright&copy;2018-{new Date().getFullYear()}
          <span className="text"> maksim-semenov </span> {isRu ? 'все права защищены' : 'all rights reserved'}
        </h4>
      </div>
    </footer>
  )
};

export default React.memo(Footer);
