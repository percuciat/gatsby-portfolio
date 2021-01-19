import React from 'react';
import { Link } from "gatsby";
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { SocialLinks } from '../components'
import "../styled/previewSection.scss"

const Preview = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  const width = window.matchMedia("(max-width: 767px)");
  return (
    <section className="preview section bg-grey">
        <div className="container preview__wrapper">
          <div className="preview__info" data-sal="slide-up"
                   data-sal-delay="300"
                   data-sal-easing="ease">
            <h1 className="title">Привет, я front-end developer</h1>
            <p className="subtitle">Создаю <span className="subtitle-gradient">полезные</span> проекты</p>
            <Link to="/contact" className="btn">
              написать мне
            </Link>
            <SocialLinks />
          </div>
          {
            !width.matches && <Image fluid={fluid} className="preview__img"/>
          }
        </div>
    </section>
  );
};

const query = graphql`{
    file(relativePath: {eq: "hero-img3.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
}`;

export default Preview;
