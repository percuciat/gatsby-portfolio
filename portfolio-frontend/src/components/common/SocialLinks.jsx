import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {
  FaTelegram,
  FaGithub
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImVk } from "react-icons/im";



const SocialLinks = ({ styleClass }) => {
  const {strapiGlobal: {socialNetworks}} = useStaticQuery(graphql`
      {
          strapiGlobal {
              socialNetworks {
                  url
                  title
                  id
              }
          }
      }
  `);

  const dataIcons = [
    <ImVk className="social__icon social__icon--vk"/>,
    <IoLogoWhatsapp className="social__icon"/>,
    <FaGithub className="social__icon"/>,
    <FaTelegram className="social__icon"/>,
  ];


  return (
    <ul className={`social__list ${styleClass ? styleClass : ""}`}>
      {
        socialNetworks.map((link, index) => {
          return (
            <li key={link.id}>
              <a href={link.url} className="social__list-item"
                 rel="noreferrer"
                 target="_blank"
                 title={link.title}>
                {dataIcons[index]}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
};

export default React.memo(SocialLinks);