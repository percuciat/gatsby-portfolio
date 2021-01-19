import React from "react";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaAlignRight } from "react-icons/fa";
import { MenuLinks, SwitcherTheme } from '../components';

import "../styled/header.scss";
import { openMenu } from "../stateManager/actions";


const Header = React.memo(({ toggleSidebar, isDark, dispatch }) => {
  const width = window.matchMedia("(max-width: 767px)");
  const handleOpenMenu = () => {
    dispatch(openMenu(!toggleSidebar));
  };
  return (
    <header className={`${isDark ? 'dark' : ''} header`}>
      <div className="container header__wrapper">
        <nav className="menu">
          <AniLink className="menu__header-logo" swipe bg="#663399" direction="right" to="/">
            <span className="firstPart">Maksim</span>
            <span className="secondPart">Semenov</span>
          </AniLink>
          {
            width.matches && <button type="button"
                                     className="toggleBtn"
                                     onClick={handleOpenMenu}>
              <FaAlignRight/>
            </button>
          }
          {!width.matches && <MenuLinks isDark={isDark}/>}
        </nav>
        <SwitcherTheme/>
      </div>
    </header>
  )
});


Header.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Header
