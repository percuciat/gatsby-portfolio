import React from "react";
import { SocialLinks } from "shared/ui";
import { observer } from "mobx-react-lite";

import { useGlobalStore } from "shared/hooks/useGlobalStore";

const Footer = (props) => {
  /*  const {
    globalUIStore: { isDark, isRu },
  } = props; */
  const globalStore = useGlobalStore();

  return (
    <footer className={`${globalStore.isDark ? "dark" : ""} footer`}>
      <div className="container footer__wrapper">
        <SocialLinks styleClass="footer__links" />
        <h4 className="footer__title">
          copyright &copy; 2018-{new Date().getFullYear()}
          <span className="text"> maksim-semenov </span>
          {globalStore.isRu ? "все права защищены" : "all rights reserved"}
        </h4>
      </div>
    </footer>
  );
};

export default observer(Footer);
