import React from "react"
import { SocialLinks, MenuLinks } from '../components'
import { FaTimes } from "react-icons/fa"
import "../styled/sidebar.scss"
import { closeMenu } from "../stateManager/actions";
import PropTypes from "prop-types";


const Sidebar = ( { toggleSidebar, dispatch }) => {
  const handleCloseMenu = () => {
    dispatch(closeMenu(!toggleSidebar));
  };
  return (
    <aside className="sidebar">
      <button className="close-btn" onClick={handleCloseMenu} title="Close menu">
        <FaTimes />
      </button>
      <nav className="side-container">
        <MenuLinks asideLinks={true} closeMenuAfterLinking={handleCloseMenu}/>
        <SocialLinks />
      </nav>
    </aside>
  )
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Sidebar