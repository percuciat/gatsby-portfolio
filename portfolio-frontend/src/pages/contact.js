import React from "react";
import { graphql } from "gatsby";
import { ContextApp } from "stateManager/store";
import LayoutMain from "_layouts/LayoutMain";
import { ContactForm } from "widgets";
import { Title, PageContainer } from "shared/ui";

const Contact = ({ data }) => {
  const {
    state: { isRu },
  } = React.useContext(ContextApp);
  const {
    allStrapiContact: { nodes },
  } = data;

  const titleRu = "Контакты";
  const titleEng = "Contact";

  return (
    <LayoutMain seoData={nodes[0].seo}>
      <PageContainer>
        <Title title={titleRu} isRu={isRu} title_eng={titleEng} />
        <ContactForm />
      </PageContainer>
    </LayoutMain>
  );
};

export const query = graphql`
  {
    allStrapiContact {
      nodes {
        seo {
          title
          description
          description_eng
          title_eng
        }
      }
    }
  }
`;

export default Contact;
