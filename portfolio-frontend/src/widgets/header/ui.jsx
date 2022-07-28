import React, { useRef, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import { SwitcherLang } from "features/switchLang";
import { SwitcherTheme } from "features/switchTheme";
import { Sidebar } from "features/sidebarToggle";
import { MenuLinks, Logo } from "shared/ui";

import useGlobalStore from "shared/hooks/useGlobalStore";

const Header = (props) => {
  const { theme } = useGlobalStore();
  const $header = useRef(null);
  const [isSticky, setSteaky] = useState(false);

  const scrollHandler = () => {
    setSteaky(window.pageYOffset > $header.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      ref={$header}
      className={`header ${theme.isDarkMode ? "dark" : ""} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="container header__wrapper">
        <nav className="menu">
          <Logo />
          <MenuLinks />
        </nav>
        <SwitcherTheme />
        <SwitcherLang />
        <Sidebar />
      </div>
    </header>
  );
};

export default observer(Header);
