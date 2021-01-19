import React from "react"
import { graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ReactMarkdown from "react-markdown"
import { Title, SEO, Layout } from '../components'
import { FaGithubSquare } from "react-icons/fa"
import Image from "gatsby-image"

import "../styled/projects.scss"


const ComponentProject = ({ data }) => {
  const { content, title, stack, image, url, github } = data.project;
  return (
    <Layout>
      <SEO title={title} />
      <section className="section">
        <div className="container">
          <Title title={title} />
          <article className="project-single">
            <div className="project-single__picture">
              {
                image && (
                  <Image fluid={image.childImageSharp.fluid} className="project-single__img" />
                )
              }
              <ul className="project-single__stack">
                {
                  stack.map(item => {
                    return <li key={item.id} className="project-single__stack-item">{item.title}</li>
                  })
                }
              </ul>
            </div>
            <div className="project-single__content">
              <div className="contentMarkdown">
                <ReactMarkdown source={content} />
              </div>
              <ul className="project-single__links">
                {
                  github && <li className="item">
                    <a className="link" href={github} target="_blank" rel="noreferrer">
                      <FaGithubSquare className="project-single__icon"/>
                    </a>
                  </li>
                }
                <li className="item">
                  <a className="link" href={url} target="_blank" rel="noreferrer">
                    {url}
                  </a>
                </li>
              </ul>
            </div>
          </article>
          <AniLink swipe direction="right" to="/projects" className="btn center-btn">
            Смотреть еще
          </AniLink>
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
    query GetSingleProject($slug: String) {
        project: strapiProjects(slug: { eq: $slug }) {
            content
            title
            github
            categorySite
            url
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            stack {
                title
                id
            }
        }
    }
`;

export default ComponentProject;
