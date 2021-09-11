import React from "react";
import { graphql} from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Markdown from "react-markdown";
import { Title } from '../components';
import Layout from "../layout/Layout";
import PageContainer from "../containers/PageContainer";
import {ContextApp} from "../stateManager/store";

const BlogTemplate = ({ data }) => {
  const {state: {isRu}} = React.useContext(ContextApp);
  const { content, title, content_eng, title_eng} = data.blogs;

  return (
    <Layout seoData={data.blogs}>
      <PageContainer>
          <Title title={title}
                 isRu={isRu}
                 title_eng={title_eng}/>
          <>
            <article className="contentMarkdown">
              <Markdown children={isRu ? content: content_eng}/>
            </article>
          </>
          <AniLink swipe direction="right" to="/blog" className="btn center-btn">
            {isRu ? 'Смотреть еще' : 'Show more'}
          </AniLink>
      </PageContainer>
    </Layout>
  )
};

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blogs: strapiBlogs(slug: { eq: $slug }) {
            content
            content_eng
            title
            title_eng
            description
            description_eng
        }
    }
`;

export default BlogTemplate
