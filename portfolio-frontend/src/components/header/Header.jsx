import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaAlignRight } from "react-icons/fa";
import { openMenu } from "../../stateManager/actions";
import { MenuLinks, Switchers } from "../../components";
import "./header.scss";


const Header = ({ toggleSidebar, isDark, isRu, dispatch }) => {
  const [width, setWidth] = React.useState(false);
  const [nameLogo, setNameLogo] = React.useState('Maksim');

  React.useEffect(() => {
    const width = window.matchMedia("(max-width: 925px)");
    setWidth(width.matches);
    if (window.matchMedia("(max-width: 400px)").matches){
      setNameLogo(nameLogo[0])
    }
  }, []);

  const handleOpenMenu = () => {
    dispatch(openMenu(!toggleSidebar));
  };

  return (
    <header className={`${isDark ? 'dark' : ''} header`}>
      <div className="container header__wrapper">
        <nav className="menu">
          <AniLink className="menu__header-logo" swipe bg="#663399" direction="right" to="/">
            <span className="firstPart">{nameLogo}</span>
            <span className="secondPart">Semenov</span>
          </AniLink>
          {
            width && <button type="button"
                             title="Menu"
                             className="toggleBtn"
                             onClick={handleOpenMenu}>
              <FaAlignRight/>
            </button>
          }
          {!width && <MenuLinks isRu={isRu}/>}
          <Switchers isDark={isDark}
                     isRu={isRu}
                     dispatch={dispatch}/>
        </nav>
      </div>
    </header>
  )
};

export default React.memo(Header);
