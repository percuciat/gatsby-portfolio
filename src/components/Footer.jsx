import React from "react"
import { SocialLinks } from '../components'

import "../styled/footer.scss"

const Footer = ({isDark}) => {
  return (
    <footer className={`${isDark ? 'dark' : ''} footer`}>
      <div className="container footer__wrapper">
        <SocialLinks styleClass="footer__links"/>
        <h4 className="footer__title">
          copyright&copy;2018-{new Date().getFullYear()}
          <span className="text"> maksim-semenov </span> all rights reserved
        </h4>
      </div>
    </footer>
  )
};

export default Footer;
