import React from "react"
import PropTypes from "prop-types"
import { Title, Blog, BlogFilter } from '../../components'
import "../../styled/blog.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const BlogItem = ({ blogItem, title, showLink }) => {
  const [categoryName, setCategoryName] = React.useState('все');
  const filterCategory = (type) => {
    setCategoryName(type);
  };
  const filtredBlog =  blogItem
    .filter(blog => {
      return categoryName === 'все'
        ? blog
        : blog.category === categoryName
    });
  return (
    <section className="section bg-grey">
      <div className="container">
        <Title title={title} />
        {
          !showLink && <BlogFilter activeCategory={categoryName}
                                   changeCategory={filterCategory}
          />
        }
        <ul className="blog__wrapper">
          {
            filtredBlog.length > 0
              ?
              filtredBlog.map(blog => {
                return <Blog key={blog.strapiId} {...blog} />
              })
              : <li>Нет статей по данной тематике.</li>
          }
        </ul>
        {
          showLink && (
            <AniLink swipe
                     direction="right"
                     to="/blog/"
                     partiallyActive={true}
                     activeClassName="current"
                     className="btn center-btn">
              Смотреть еще
            </AniLink>
          )
        }
      </div>
    </section>
  )
};

BlogItem.propTypes ={
  title: PropTypes.string.isRequired,
};

export default BlogItem
