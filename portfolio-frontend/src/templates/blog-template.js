import React from "react";
import { graphql } from "gatsby";
import { observer } from "mobx-react-lite";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Markdown from "react-markdown";

import LayoutMain from "_layouts/LayoutMain";
import { PageContainer, Title } from "shared/ui";

import useGlobalStore from "shared/hooks/useGlobalStore";

const BlogTemplate = ({ data }) => {
  const { lang } = useGlobalStore();
  const { content, title, content_eng, title_eng } = data.blogs;

  return (
    <LayoutMain seoData={data.blogs}>
      <PageContainer>
        <Title title={title} title_eng={title_eng} />
        <div className="contentMarkdown">
          <Markdown children={lang.isRuLang ? content : content_eng} />
        </div>
        <AniLink swipe direction="right" to="/blog" className="btn center-btn">
          {lang.isRuLang ? "Смотреть еще" : "Show more"}
        </AniLink>
      </PageContainer>
    </LayoutMain>
  );
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

export default observer(BlogTemplate);
