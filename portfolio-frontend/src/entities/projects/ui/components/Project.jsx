import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../projects.scss";

const Project = ({
  isRu,
  title,
  title_eng,
  image,
  slug,
  shortDescription,
  shortDescription_eng,
}) => {
  return (
    <>
      <figure className="projects__item">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          className="projects__img"
          alt={isRu ? title : title_eng}
        />
        <figcaption className="projects__info">
          <h3>{isRu ? title : title_eng}</h3>
          <p className="projects__description">
            {isRu ? shortDescription : shortDescription_eng}
          </p>
          <AniLink
            swipe
            direction="right"
            to={`/projects/${slug}`}
            className="projects__link"
          >
            {isRu ? "Узнать подробнее" : "Read more"}
          </AniLink>
        </figcaption>
      </figure>
    </>
  );
};

export default Project;
