import React from "react";
import { graphql } from "gatsby";

import LayoutMain from "_layouts/LayoutMain";
import { Title, PageContainer } from "shared/ui";
import { AboutSection } from "_pages";

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const {
    seo: { title, title_eng, shareImage },
    textAbout,
    textAbout_eng,
  } = nodes[0];

  return (
    <LayoutMain seoData={nodes[0].seo}>
      <PageContainer>
        <Title title={title} title_eng={title_eng} />
        <AboutSection
          shareImage={shareImage}
          textAbout={textAbout}
          textAbout_eng={textAbout_eng}
        />
      </PageContainer>
    </LayoutMain>
  );
};

export const query = graphql`
  {
    about: allStrapiAbout {
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
