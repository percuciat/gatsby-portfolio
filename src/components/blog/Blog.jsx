import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Blog = ({ strapiId, title, image, date, category, slug, descriptionCard, }) => {

  return (
    <li key={strapiId} className="blog">
      <figure className="blog__item">
        {
          image && (
            <Image fluid={image.childImageSharp.fluid} className="blog__img" />
          )
        }
        <figcaption className="blog__card">
          <h3>{title}</h3>
          <p className="blog__card-text">{descriptionCard}</p>
          <div className="blog__footer">
            <p className="footer-item footer-category">{category}</p>
            <p className="footer-item">{date}</p>
          </div>
          <AniLink swipe direction="left"
                   to={`/blog/${slug}`}
                   className="blog__card-btn">Читать подробнее</AniLink>
        </figcaption>
      </figure>
    </li>
  )
};

Blog.propTypes = {
  strapiId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  descriptionCard: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};
export default Blog
