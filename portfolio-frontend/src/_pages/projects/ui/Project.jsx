import React from "react";
import { observer } from "mobx-react-lite";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
          <AniLink
            swipe
            direction="right"
            to={`/projects/${slug}`}
            className="projects__link"
          >
            {lang.isRuLang ? "Узнать подробнее" : "Read more"}
          </AniLink>
        </figcaption>
      </figure>
    </>
  );
};

export default observer(Project);
