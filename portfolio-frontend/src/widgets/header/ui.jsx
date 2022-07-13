import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaAlignRight } from "react-icons/fa";
import { openMenu } from "stateManager/actions";
import { HeaderSwitchLang, HeaderSwitchTheme } from "./entities/switcher";
import { MenuLinks } from "components/common";
import { NAME_LOGO, TABLET_MEDIA, MOBILE_MEDIA } from "consts";
import { isCorrectMediaScreen } from "utils/isCorrectMediaScreen";

import "./header.scss";

const Header = ({ toggleSidebar, isDark, isRu, dispatch, widthScreen }) => {
  const handleOpenMenu = () => {
    dispatch(openMenu(!toggleSidebar));
    document.body.style.overflow = "hidden";
  };

  return (
    <header className={`${isDark ? "dark" : ""} header`}>
      <div className="container header__wrapper">
        <nav className="menu">
          <AniLink
            className="menu__header-logo"
            swipe
            bg="#663399"
            direction="right"
            to="/"
          >
            <span className="firstPart">
              {isCorrectMediaScreen(widthScreen, MOBILE_MEDIA.name)
                ? NAME_LOGO
                : NAME_LOGO[0]}
            </span>
            <span className="secondPart">Semenov</span>
          </AniLink>
          {!isCorrectMediaScreen(widthScreen, TABLET_MEDIA.name) && (
            <button
              type="button"
              title="Menu"
              className="toggleBtn"
              onClick={handleOpenMenu}
            >
              <FaAlignRight />
            </button>
          )}
          {isCorrectMediaScreen(widthScreen, TABLET_MEDIA.name) && (
            <MenuLinks isRu={isRu} />
          )}
          <HeaderSwitchLang isDark={isDark} isRu={isRu} dispatch={dispatch} />
          <HeaderSwitchTheme isDark={isDark} isRu={isRu} dispatch={dispatch} />
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
