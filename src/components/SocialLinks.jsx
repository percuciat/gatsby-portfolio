import React from "react"
import {
  FaTelegram,
  FaGithub
} from "react-icons/fa"

import { IoLogoWhatsapp } from "react-icons/io"
import { ImVk } from "react-icons/im"



const data = [
  {
    id: 1,
    icon: <ImVk className="social__icon social__icon--vk"/>,
    url: "https://vk.com/somniator2",
    name: 'vk',
  },
  {
    id: 2,
    icon: <IoLogoWhatsapp className="social__icon"/>,
    url: "https://api.whatsapp.com/send?phone=79503243404",
    name: 'WhatsApp',
  },
  {
    id: 3,
    icon: <FaGithub className="social__icon"/>,
    url: "https://github.com/percuciat",
    name: 'github',
  },
  {
    id: 4,
    icon: <FaTelegram className="social__icon"/>,
    url: "https://t.me/semenovWeb",
    name: 'telegram',
  },
];


const SocialLinks = React.memo(({ styleClass }) => {
  return (
    <ul className={`social__list ${styleClass ? styleClass : ""}`}>
      {
        data.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url} className="social__list-item"
                 rel="noreferrer"
                 target="_blank"
                 title={link.name}>
                {link.icon}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
});

export default SocialLinks;