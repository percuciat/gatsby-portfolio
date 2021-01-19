import React from "react"
import { Layout, Projects, SEO } from '../components'
import { graphql } from "gatsby"


const ProjectsPage = ({data}) => {
  const { allStrapiProjects: { nodes: projects } } = data;
  return (
    <Layout>
      <SEO title="Портфолио" />
      <Projects projects={projects} title="Портфолио" />
    </Layout>
  )
};
export const query = graphql`
    {
        allStrapiProjects {
            nodes {
                title
                url
                slug
                description
                categorySite
                github
                id
                image {
                    childImageSharp {
                        fluid {
                             ...GatsbyImageSharpFluid
                        }
                    }
                }
                stack {
                    id
                    title
                }
                strapiId
            }
        }
    }
`;

export default ProjectsPage
