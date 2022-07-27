import React from "react";
import { observer } from "mobx-react-lite";
import { FaTimes } from "react-icons/fa";
import { MenuLinks, SocialLinks } from "shared/ui";

import useGlobalStore from "shared/hooks/useGlobalStore";

const Sidebar = (props) => {
  const { theme } = useGlobalStore();
  const handleCloseMenu = () => {
    /*  dispatch(closeMenu(!toggleSidebar)); */
    document.body.style.overflow = "auto";
  };
  return (
    <aside className={`${theme.isDarkMode ? "darkSecondary" : ""} sidebar`}>
      <button
        className="close-btn"
        onClick={handleCloseMenu}
        title="Close menu"
      >
        <FaTimes />
      </button>
      <nav className="side-container">
        <MenuLinks asideLinks={true} closeMenuAfterLinking={handleCloseMenu} />
        <SocialLinks />
      </nav>
    </aside>
  );
};

export default observer(Sidebar);
