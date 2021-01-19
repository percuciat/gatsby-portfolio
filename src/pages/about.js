import React from "react"
import { Layout, Title, SEO } from "../components"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa"


const dataStack = [
  {
    id: 1,
    icon: <FaHtml5 className="stack__icon"/>,
  },
  {
    id: 2,
    icon: <FaCss3 className="stack__icon"/>,
  },
  {
    id: 3,
    icon: <FaJs className="stack__icon"/>,
  },
  {
    id: 4,
    icon: <FaReact className="stack__icon"/>,
  },
];

const About = ({data: {about: {nodes}}}) => {
    const { titleAbout, textAbout, imageAbout } = nodes[0];
    return (
      <Layout>
          <SEO title="Обо мне" description="Я - Максим Семенов - фронтенд разработчик. Занимаюсь разработкой сайтов и приложений. Мне нравится реализовывать творческие идеи и решения, создавать полезные и перспективные проекты." />
          <section className="section">
              <div className="container">
                  <Title title={titleAbout} />
                  <div className="about__wrapper">
                      <Image fluid={imageAbout.childImageSharp.fluid} className="about__img"/>
                      <article className="contentMarkdown">
                          <ReactMarkdown className="about__text" source={textAbout}/>
                          <ul className="about__stack">
                              { dataStack.map(item => {
                                  return <li key={item.id} className="about__stack-item">{item.icon}</li>
                              })}
                          </ul>
                      </article>
                  </div>
              </div>
          </section>
      </Layout>
    )
};

export const query = graphql`
    {
        about: allStrapiAbout {
            nodes {
                titleAbout
                textAbout
                imageAbout {
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
        }
    }
`;

export default About
