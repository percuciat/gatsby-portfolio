import React from "react";
import { observer } from "mobx-react-lite";

import { SocialLinks } from "shared/ui";
import useGlobalStore from "shared/hooks/useGlobalStore";

const Footer = (props) => {
  const { lang, theme } = useGlobalStore();

  return (
    <footer className={`${theme.isDarkMode ? "dark" : ""} footer`}>
      <div className="container footer__wrapper">
        <SocialLinks styleClass="footer__links" />
        <h4 className="footer__title">
          copyright &copy; 2018-{new Date().getFullYear()}
          <span className="text"> maksim-semenov </span>
          {lang.isRuLang ? "все права защищены" : "all rights reserved"}
        </h4>
      </div>
    </footer>
  );
};

export default observer(Footer);
