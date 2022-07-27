import React from "react";
import { observer } from "mobx-react-lite";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import useGlobalStore from "shared/hooks/useGlobalStore";

const BlogItem = (props) => {
  const {
    strapiId,
    title,
    title_eng,
    image,
    date,
    category,
    slug,
    description,
    description_eng,
  } = props;
  const { lang } = useGlobalStore();

  return (
    <li key={strapiId} className="blog">
      <figure className="blog__item">
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          className="blog__img"
          alt={lang.isRuLang ? title : title_eng}
        />
        <figcaption className="blog__card">
          <h3>{lang.isRuLang ? title : title_eng}</h3>
          <p className="blog__card-text">
            {lang.isRuLang ? description : description_eng}
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
            {lang.isRuLang ? "Читать подробнее" : "Read more"}
          </AniLink>
        </figcaption>
      </figure>
    </li>
  );
};

export default observer(BlogItem);
