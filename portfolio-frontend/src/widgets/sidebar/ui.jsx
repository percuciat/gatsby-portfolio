import React from "react";
import { FaTimes } from "react-icons/fa";
import { MenuLinks, SocialLinks } from "shared/ui";
import { closeMenu } from "stateManager/actions";


const Sidebar = ({ toggleSidebar, dispatch, isRu, isDark }) => {
  const handleCloseMenu = () => {
    dispatch(closeMenu(!toggleSidebar));
    document.body.style.overflow = "auto";
  };
  return (
    <aside className={`${isDark ? "darkSecondary" : ""} sidebar`}>
      <button
        className="close-btn"
        onClick={handleCloseMenu}
        title="Close menu"
      >
        <FaTimes />
      </button>
      <nav className="side-container">
        <MenuLinks
          asideLinks={true}
          isRu={isRu}
          closeMenuAfterLinking={handleCloseMenu}
        />
        <SocialLinks isDark={isDark} />
      </nav>
    </aside>
  );
};

export default Sidebar;
