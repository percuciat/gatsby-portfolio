import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const MenuLinks = ({ asideLinks, closeMenuAfterLinking, isRu }) => {
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
              {isRu ? link.text : link.text_eng}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuLinks;
