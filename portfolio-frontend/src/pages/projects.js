import React from "react";
import { graphql } from "gatsby";
import LayoutMain from "_layouts/LayoutMain";
import { ProjectList } from "_pages";
import { PageContainer } from "shared/ui/";

const ProjectsPage = React.memo(({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiPortfolio: { nodes },
  } = data;
  return (
    <LayoutMain seoData={nodes[0].seo}>
      <PageContainer>
        <ProjectList projects={projects} />
      </PageContainer>
    </LayoutMain>
  );
});
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        title_eng
        slug
        category
        shortDescription
        shortDescription_eng
        description
        description_eng
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        stack {
          id
          stackTitle
        }
      }
    }
    allStrapiPortfolio {
      nodes {
        seo {
          title
          description
          description_eng
          title_eng
        }
      }
    }
  }
`;

export default ProjectsPage;
