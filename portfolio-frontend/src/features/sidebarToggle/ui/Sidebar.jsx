import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { MenuLinks, SocialLinks } from "shared/ui";
import { FaAlignRight, FaTimes } from "react-icons/fa";

import useGlobalStore from "shared/hooks/useGlobalStore";

const Sidebar = (props) => {
  const isBrowser = typeof window !== "undefined";
  const { theme, lang } = useGlobalStore();
  const [isClose, setClose] = useState(true);
  const $body = useRef(isBrowser ? document.body : null);

  const handleOpenMenu = () => {
    setClose(false);
    $body.current.style.overflow = "hidden";
  };

  const handleCloseMenu = () => {
    setClose(true);
    $body.current.style = "";
  };

  useEffect(() => {
    return () => ($body.current.style = "");
  }, []);

  if (isClose) {
    return (
      <button
        type="button"
        title={`${lang.isRuLang ? "Открыть меню" : "Open menu"}`}
        className="toggleBtn"
        onClick={handleOpenMenu}
      >
        <FaAlignRight />
      </button>
    );
  }

  return (
    <aside className={`${theme.isDarkMode ? "darkSecondary" : ""} sidebar`}>
      <button
        type="button"
        className="close-btn"
        onClick={handleCloseMenu}
        title={`${lang.isRuLang ? "Закрыть меню" : "Close menu"}`}
      >
        <FaTimes />
      </button>
      <nav className="side-container">
        <MenuLinks customStyles={"sidebar-links"} />
        <SocialLinks />
      </nav>
    </aside>
  );
};

export default observer(Sidebar);
