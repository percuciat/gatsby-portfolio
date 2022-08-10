import React from "react";
import { graphql } from "gatsby";
import LayoutMain from "_layouts/LayoutMain";
import { BlogList } from "_pages";
import { PageContainer } from "shared/ui";

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogItem },
    allStrapiBlogPage: { nodes },
  },
}) => {
  return (
    <LayoutMain seoData={nodes[0].seo}>
      <PageContainer isGrey={true}>
        <BlogList blogItem={blogItem} />
      </PageContainer>
    </LayoutMain>
  );
};

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        description
        description_eng
        date
        strapiId
        title
        title_eng
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
    allStrapiBlogPage {
      nodes {
        seo {
          description
          title
          description_eng
          title_eng
        }
      }
    }
  }
`;
export default Blog;
