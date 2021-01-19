import React from "react"
import { Layout, BlogItem, SEO } from "../components"
import { graphql } from "gatsby"

const Blog = ({
                data: {
                  allStrapiBlogs: { nodes: blogItem },
                },
              }) => {
  return (
    <Layout>
      <SEO title="Полезности" />
      <BlogItem blogItem={blogItem} title="Полезности" />
    </Layout>
  )
};

export const query = graphql`
    {
        allStrapiBlogs {
            nodes {
                slug
                descriptionCard
                date(formatString: "Do MMMM, YYYY", locale: "ru")
                strapiId
                title
                category
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
export default Blog
