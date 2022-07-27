import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { observer } from "mobx-react-lite";
import useGlobalStore from "shared/hooks/useGlobalStore";

const MenuLinks = (props) => {
  const { asideLinks, closeMenuAfterLinking } = props;
  const {
    strapiGlobal: { menuTop },
  } = useStaticQuery(graphql`
    {
      strapiGlobal {
        menuTop {
          text
          text_eng
          url
          id
        }
      }
    }
  `);
  const { lang } = useGlobalStore();
  return (
    <ul
      className={`${asideLinks ? "sidebar-links" : "page-links menu__links"}`}
    >
      {menuTop.map((link) => {
        return (
          <li className="menu__item" key={link.id}>
            <Link
              className="menu-item__link"
              activeClassName="current"
              onClick={closeMenuAfterLinking}
              to={link.url}
            >
              {lang.isRuLang ? link.text : link.text_eng}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default observer(MenuLinks);
