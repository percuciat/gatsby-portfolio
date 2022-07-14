import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import useFilterCategory from "../../../hooks/useFilterCategory";
import BlogItem from "./components/BlogItem";
import { Title, FilterSection } from "../../../shared/ui/";


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

  const { actionFilter, filteredData, activeCategoryName } =
    useFilterCategory(blogItem);

  const titleRu = "Блог";
  const titleEng = "Blog";

  return (
    <>
      <Title title={titleRu} isRu={isRu} title_eng={titleEng} />
      {!showLink && (
        <FilterSection
          activeCategory={activeCategoryName}
          filterItems={nodes}
          isRu={isRu}
          changeCategory={actionFilter}
        />
      )}
      <ul className="blog__wrapper">
        {filteredData.length > 0 ? (
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
