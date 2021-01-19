import React from "react"
import { graphql} from "gatsby"
import { Layout, SEO, Preview, Services, Jobs, Projects, BlogItem  } from '../components'

import "normalize.css"


const IndexPage = ({data}) => {
    const {
        allStrapiProjects: { nodes: projects },
        allStrapiBlogs: {nodes: blogItem},
    } = data;
    return (
      <Layout>
          <SEO title="Home" description="this is our home page"
               keywords="Создание сайтов Казань, Web-semenov, Web-semenov Казань, Создание сайтов, Создание приложений, Create Application" />
          <Preview/>
          <Services title="Что умею"/>
          <Jobs title="Опыт работы"/>
          <Projects projects={projects} title="Портфолио" showLink/>
          <BlogItem blogItem={blogItem} title="Полезности" showLink/>
      </Layout>
    )
};

export const query = graphql`
    {
        allStrapiProjects(filter: {featured: {eq: true}}) {
            nodes {
                github
                id
                slug
                categorySite
                description
                title
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
            }
        },
        allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
            nodes {
                content
                descriptionCard
                date(formatString: "Do MMMM, YYYY", locale: "ru")
                slug
                title
                strapiId
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
`;

export default IndexPage
