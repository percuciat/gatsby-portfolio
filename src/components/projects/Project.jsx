import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Project = ({ title, image, slug, description }) => {
  return <>
      <figure className="projects__item">
        {
          image && (
            <Image fluid={image.childImageSharp.fluid} className="projects__img" />
          )
        }
        <figcaption className="projects__info">
          <h3>{title || "default title"}</h3>
          <p className="projects__description">{description}</p>
          <AniLink swipe direction="right"
                   to={`/projects/${slug}`}
                   className="projects__link">Узнать подробнее</AniLink>
        </figcaption>
      </figure>
    </>
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
};



export default Project
