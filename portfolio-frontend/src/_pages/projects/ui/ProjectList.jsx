import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Title, FilterSection } from "shared/ui/";
import Project from "./Project";
import useFilterCategory from "shared/hooks/useFilterCategory";

const ProjectList = ({ isRu, projects, showLink }) => {
  const {
    allStrapiProjectsCategories: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiProjectsCategories(sort: { fields: name }) {
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
    useFilterCategory(projects);

  const titleRu = "Портфолио";
  const titleEng = "Portfolio";
  const filterLength = filteredData.length;

  return (
    <>
      <Title title={titleRu} isRu={isRu} title_eng={titleEng} />
      {!showLink && (
        <FilterSection
          activeCategory={activeCategoryName}
          isRu={isRu}
          filterItems={nodes}
          changeCategory={filterHandler}
        />
      )}
      <ul className="projects__wrapper">
        {filterLength > 0 ? (
          filteredData.map((project) => {
            return (
              <li key={project.id}>
                <Project isRu={isRu} {...project} />
              </li>
            );
          })
        ) : (
          <li>{isRu ? "Проекты еще не добавлены" : "No projects added yet"}</li>
        )}
      </ul>
      {showLink && (
        <AniLink
          swipe
          direction="left"
          to="/projects/"
          className="btn center-btn"
        >
          {isRu ? "Смотреть больше" : "Show more"}
        </AniLink>
      )}
    </>
  );
};

export default ProjectList;