import React from "react";
<<<<<<< HEAD
import { graphql, useStaticQuery } from "gatsby";
import { observer } from "mobx-react-lite";
import AniLink from "gatsby-plugin-transition-link/AniLink";
=======
import { graphql, useStaticQuery, Link } from "gatsby";
import { observer } from "mobx-react-lite";
/* import AniLink from "gatsby-plugin-transition-link/AniLink"; */
>>>>>>> temp

import BlogItem from "./BlogItem";
import { Title, FilterSection } from "shared/ui/";

import useFilterCategory from "shared/hooks/useFilterCategory";
import useGlobalStore from "shared/hooks/useGlobalStore";

const BlogList = (props) => {
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
  const { blogItem, showLink } = props;
  const { filterHandler, filteredData, activeCategoryName } =
    useFilterCategory(blogItem);
  const { lang } = useGlobalStore();

  const titleRu = "Блог";
  const titleEng = "Blog";
  const filterLength = filteredData.length;

  return (
    <>
      <Title title={titleRu} title_eng={titleEng} />
      {!showLink && (
        <FilterSection
          activeCategory={activeCategoryName}
          filterItems={nodes}
          changeCategory={filterHandler}
        />
      )}
      <ul className="blog__wrapper">
        {filterLength > 0 ? (
          filteredData.map((blog) => {
            return <BlogItem key={blog.strapiId} {...blog} />;
          })
        ) : (
          <li>
            {lang.isRuLang ? "Нет статей по данной тематике" : "Not articles"}
          </li>
        )}
      </ul>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          {lang.isRuLang ? "Смотреть больше" : "Show more"}
        </Link>
      )}
    </>
  );
};

export default observer(BlogList);
