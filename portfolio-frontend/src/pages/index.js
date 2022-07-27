import React from "react";
import { graphql } from "gatsby";
import { Services, Jobs, ProjectList, BlogList } from "entities";
import { Preview } from "_pages";
import LayoutMain from "_layouts/LayoutMain/";
import { PageContainer } from "shared/ui";

const UIIndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogItem },
  } = data;

  return (
    <LayoutMain>
      {/*  <Preview /> */}
      <PageContainer>
        <Services />
      </PageContainer>
      <PageContainer isGrey={true}>
        <Jobs />
      </PageContainer>
      <PageContainer>
        <ProjectList projects={projects} showLink />
      </PageContainer>
      <PageContainer isGrey={true}>
        <BlogList blogItem={blogItem} showLink />
      </PageContainer>
    </LayoutMain>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        slug
        category
        shortDescription
        shortDescription_eng
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
          id
          stackTitle
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        content
        content_eng
        description
        description_eng
        date(formatString: "Do MMMM, YYYY", locale: "ru")
        slug
        title
        title_eng
        strapiId
        category
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default UIIndexPage;
