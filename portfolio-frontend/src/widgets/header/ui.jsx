import React, { useRef, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaAlignRight } from "react-icons/fa";

import { SwitcherLang } from "features/switchLang";
import { SwitcherTheme } from "features/switchTheme";

import { MenuLinks } from "shared/ui";
import useGlobalStore from "shared/hooks/useGlobalStore";

import { NAME_LOGO, TABLET_MEDIA, MOBILE_MEDIA } from "consts";
import { isCorrectMediaScreen } from "shared/lib/isCorrectMediaScreen";


const Header = (props) => {
  const { lang, theme } = useGlobalStore();
  const $header = useRef(null);
  const [isSticky, setSteaky] = useState(false);

  const scrollHandler = () => {
    setSteaky(window.pageYOffset > $header.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleOpenMenu = () => {
    /* dispatch(openMenu(!toggleSidebar)); */
    document.body.style.overflow = "hidden";
  };
  // ${globalUIStore.isDark ? "dark" : "" }
  return (
    <header
      ref={$header}
      className={`header ${theme.isDarkMode ? "dark" : ""} ${
        isSticky ? "sticky" : ""
      }`}
    >
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
              {NAME_LOGO}
              {/* {isCorrectMediaScreen(widthScreen, MOBILE_MEDIA.name)
                ? NAME_LOGO
                : NAME_LOGO[0]} */}
            </span>
            <span className="secondPart">Semenov</span>
          </AniLink>
          {/* {isCorrectMediaScreen(widthScreen, TABLET_MEDIA.name) && (
            <MenuLinks isRu={isRu} />
          )} */}
        </nav>
        <SwitcherTheme />
        <SwitcherLang />
        {/* {!isCorrectMediaScreen(widthScreen, TABLET_MEDIA.name) && (
          <button
            type="button"
            title="Menu"
            className="toggleBtn"
            onClick={handleOpenMenu}
          >
            <FaAlignRight />
          </button>
        )} */}
      </div>
    </header>
  );
};

export default observer(Header);
