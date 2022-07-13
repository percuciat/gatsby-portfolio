import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const BlogItem = ({
  isRu,
  strapiId,
  title,
  title_eng,
  image,
  date,
  category,
  slug,
  description,
  description_eng,
}) => {
  return (
    <li key={strapiId} className="blog">
      <figure className="blog__item">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          className="blog__img"
          alt={isRu ? title : title_eng}
        />
        <figcaption className="blog__card">
          <h3>{isRu ? title : title_eng}</h3>
          <p className="blog__card-text">
            {isRu ? description : description_eng}
          </p>
          <div className="blog__footer">
            <p className="footer-item footer-category">{category}</p>
            <p className="footer-item">{date}</p>
          </div>
          <AniLink
            swipe
            direction="left"
            to={`/blog/${slug}`}
            className="blog__card-btn"
          >
            {isRu ? "Читать подробнее" : "Read more"}
          </AniLink>
        </figcaption>
      </figure>
    </li>
  );
};

export default BlogItem;
