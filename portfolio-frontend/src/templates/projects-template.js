import React, { useContext } from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { observer } from "mobx-react-lite";

import LayoutMain from "_layouts/LayoutMain";
import { PageContainer, Title } from "shared/ui";
import { ProjectSingle } from "_pages";

import useGlobalStore from "shared/hooks/useGlobalStore";

const ProjectTemplate = ({ data }) => {
  const { lang } = useGlobalStore();
  const { title, title_eng } = data.projects;

  return (
    <LayoutMain seoData={data.projects}>
      <PageContainer>
        <Title title={title} title_eng={title_eng} />
        <ProjectSingle {...data.projects} />
        <AniLink
          swipe
          direction="right"
          to="/projects"
          className="btn center-btn"
        >
          {lang.isRuLang ? "Смотреть еще" : "Show more"}
        </AniLink>
      </PageContainer>
    </LayoutMain>
  );
};

export const query = graphql`
  query GetSingleProject($slug: String) {
    projects: strapiProjects(slug: { eq: $slug }) {
      description
      description_eng
      title
      title_eng
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      stack {
        stackTitle
        id
      }
    }
  }
`;

export default observer(ProjectTemplate);
