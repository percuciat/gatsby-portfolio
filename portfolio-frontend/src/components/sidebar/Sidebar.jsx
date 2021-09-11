import React from "react";
import { SocialLinks, MenuLinks } from '../index';
import { FaTimes } from "react-icons/fa";
import { closeMenu } from "../../stateManager/actions";

import "./sidebar.scss"

const Sidebar = ( { toggleSidebar, dispatch, isRu, isDark }) => {
  const handleCloseMenu = () => {
    dispatch(closeMenu(!toggleSidebar));
  };
  return (
    <aside className={`${isDark ? 'darkSecondary' : ''} sidebar`}>
      <button className="close-btn" onClick={handleCloseMenu}
              title="Close menu">
        <FaTimes />
      </button>
      <nav className="side-container">
        <MenuLinks asideLinks={true}
                   isRu={isRu}
                   closeMenuAfterLinking={handleCloseMenu}/>
        <SocialLinks isDark={isDark}/>
      </nav>
    </aside>
  )
};

export default Sidebar