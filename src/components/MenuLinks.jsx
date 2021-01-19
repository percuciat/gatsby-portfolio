import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
const data = [
  {
    id: 1,
    text: "Обо мне",
    url: "/about/",
  },
  {
    id: 2,
    text: "Портфолио",
    url: "/projects/",
  },
  {
    id: 3,
    text: "Полезности",
    url: "/blog/",
  },
  {
    id: 4,
    text: "Контакты",
    url: "/contact/",
  },
];

const MenuLinks = ({ asideLinks, closeMenuAfterLinking }) => {

  return <>
    <ul className={`${asideLinks ? 'sidebar-links' : 'page-links menu__links'}`}>
      {
        data.map(link => {
          return (
            <li className="menu__item" key={link.id}>
              <AniLink paintDrip hex="#663399"
                       className="menu-item__link"
                       activeClassName="current"
                       onClick={closeMenuAfterLinking}
                       to={link.url}>{link.text}</AniLink>
            </li>
          )
        })
      }
    </ul>
  </>
};

export default MenuLinks;

