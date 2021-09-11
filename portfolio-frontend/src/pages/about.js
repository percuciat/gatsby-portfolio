import React from "react";
import { graphql } from "gatsby";
import { Title } from "../components";
import Layout from "../layout/Layout";
import AboutWrapper from "../containers/AboutWrapper";
import PageContainer from "../containers/PageContainer";


const About = ({data: {about: {nodes}}}) => {
    const { seo: {title, title_eng, shareImage}, textAbout, textAbout_eng } = nodes[0];

    return (
      <Layout seoData={nodes[0].seo}>
        <PageContainer>
          <Title title={title}
                 title_eng={title_eng}/>
          <AboutWrapper shareImage={shareImage}
                        textAbout={textAbout}
                        textAbout_eng={textAbout_eng}/>
        </PageContainer>
      </Layout>
    )
};


export const query = graphql`
    {
      about:  allStrapiAbout {
        nodes {
          textAbout
          textAbout_eng
          seo {
            description
            description_eng
            title_eng
            title
            shareImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
`;


export default About;
