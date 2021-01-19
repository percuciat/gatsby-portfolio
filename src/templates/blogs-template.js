import React from "react"
import { graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ReactMarkdown from "react-markdown"
import { Title, SEO, Layout } from '../components'

const ComponentBlog = ({ data }) => {
  const { content, title, descriptionCard } = data.blog;

  return (
    <Layout>
      <SEO title={title} description={descriptionCard} />
      <section className="section">
        <div className="container">
          <Title title={title} />
          <article className="contentMarkdown">
            <ReactMarkdown source={content} />
          </article>
          <AniLink swipe direction="right" to="/blog" className="btn center-btn">
            Смотреть еще
          </AniLink>
        </div>
      </section>
    </Layout>
  )
};

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blog: strapiBlogs(slug: { eq: $slug }) {
            content
            title
            descriptionCard
        }
    }
`;

export default ComponentBlog
