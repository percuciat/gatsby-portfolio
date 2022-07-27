import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import useFilterCategory from "shared/hooks/useFilterCategory";
import BlogItem from "./BlogItem";
import { Title, FilterSection } from "shared/ui/";

const BlogList = ({ isRu, blogItem, showLink }) => {
  const {
    allStrapiBlogsCategories: { nodes },
  } = useStaticQuery(graphql`
    query CategoriesBlog {
      allStrapiBlogsCategories(sort: { fields: name }) {
        nodes {
          title
          id
          name
          name_eng
        }
      }
    }
  `);

  const { filterHandler, filteredData, activeCategoryName } =
    useFilterCategory(blogItem);

  const titleRu = "Блог";
  const titleEng = "Blog";
  const filterLength = filteredData.length;

  return (
    <>
      <Title title={titleRu} isRu={isRu} title_eng={titleEng} />
      {!showLink && (
        <FilterSection
          activeCategory={activeCategoryName}
          filterItems={nodes}
          isRu={isRu}
          changeCategory={filterHandler}
        />
      )}
      <ul className="blog__wrapper">
        {filterLength > 0 ? (
          filteredData.map((blog) => {
            return <BlogItem key={blog.strapiId} isRu={isRu} {...blog} />;
          })
        ) : (
          <li>{isRu ? "Нет статей по данной тематике" : "Not articles"}</li>
        )}
      </ul>
      {showLink && (
        <AniLink
          swipe
          direction="right"
          to="/blog/"
          partiallyActive={true}
          activeClassName="current"
          className="btn center-btn"
        >
          {isRu ? "Смотреть больше" : "Show more"}
        </AniLink>
      )}
    </>
  );
};

export default BlogList;