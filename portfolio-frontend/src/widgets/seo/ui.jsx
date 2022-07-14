import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ seoData }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            siteDescription: description
            author
            keywords
          }
        }
      }
    `
  );

  const metaDescription =
    seoData?.description || site.siteMetadata.siteDescription;

  return (
    <Helmet
      htmlAttributes={{ lang: "ru" }}
      title={site.siteMetadata.siteTitle}
      titleTemplate={`%s ${seoData ? "| " + seoData.title : ""}`}
    >
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default Seo;
