import React from "react";
import { observer } from "mobx-react-lite";
<<<<<<< HEAD
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
=======
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
/* import AniLink from "gatsby-plugin-transition-link/AniLink"; */
>>>>>>> temp

import useGlobalStore from "shared/hooks/useGlobalStore";

const Project = (props) => {
  const {
    title,
    title_eng,
    image,
    slug,
    shortDescription,
    shortDescription_eng,
  } = props;
  const { lang } = useGlobalStore();
<<<<<<< HEAD
  
=======

>>>>>>> temp
  return (
    <>
      <figure className="projects__item">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          className="projects__img"
          alt={lang.isRuLang ? title : title_eng}
        />
        <figcaption className="projects__info">
          <h3>{lang.isRuLang ? title : title_eng}</h3>
          <p className="projects__description">
            {lang.isRuLang ? shortDescription : shortDescription_eng}
          </p>
<<<<<<< HEAD
          <AniLink
            swipe
            direction="right"
            to={`/projects/${slug}`}
            className="projects__link"
          >
            {lang.isRuLang ? "Узнать подробнее" : "Read more"}
          </AniLink>
=======
          <Link to={`/projects/${slug}`} className="projects__link">
            {lang.isRuLang ? "Узнать подробнее" : "Read more"}
          </Link>
>>>>>>> temp
        </figcaption>
      </figure>
    </>
  );
};

export default observer(Project);
