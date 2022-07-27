import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { observer } from "mobx-react-lite";

import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Title, FilterSection } from "shared/ui/";
import Project from "./Project";

import useFilterCategory from "shared/hooks/useFilterCategory";
import useGlobalStore from "shared/hooks/useGlobalStore";

const ProjectList = (props) => {
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
  const { projects, showLink } = props;
  const { lang } = useGlobalStore();
  const { filterHandler, filteredData, activeCategoryName } =
    useFilterCategory(projects);

  const titleRu = "Портфолио";
  const titleEng = "Portfolio";
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
      <ul className="projects__wrapper">
        {filterLength > 0 ? (
          filteredData.map((project) => {
            return (
              <li key={project.id}>
                <Project {...project} />
              </li>
            );
          })
        ) : (
          <li>
            {lang.isRuLang
              ? "Проекты еще не добавлены"
              : "No projects added yet"}
          </li>
        )}
      </ul>
      {showLink && (
        <AniLink
          swipe
          direction="left"
          to="/projects/"
          className="btn center-btn"
        >
          {lang.isRuLang ? "Смотреть больше" : "Show more"}
        </AniLink>
      )}
    </>
  );
};

export default observer(ProjectList);
