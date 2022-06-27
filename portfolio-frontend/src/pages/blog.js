import React from "react";
import { graphql } from "gatsby";
import { BlogList } from "../components";
import Layout from "../layout/Layout";
import PageContainer from "../containers/PageContainer";

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogItem },
    allStrapiBlogPage: { nodes },
  },
}) => {
  return (
    <Layout seoData={nodes[0].seo}>
      <PageContainer isGrey={true}>
        <BlogList blogItem={blogItem} />
      </PageContainer>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        description
        description_eng
        date(formatString: "Do MMMM, YYYY", locale: "ru")
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
