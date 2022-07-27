import React from "react";
import { observer } from "mobx-react-lite";
import { graphql } from "gatsby";

import LayoutMain from "_layouts/LayoutMain";
import { ContactForm } from "widgets";
import { Title, PageContainer } from "shared/ui";


const Contact = ({ data }) => {
  const {
    allStrapiContact: { nodes },
  } = data;

  const titleRu = "Контакты";
  const titleEng = "Contact";

  return (
    <LayoutMain seoData={nodes[0].seo}>
      <PageContainer>
        <Title title={titleRu} title_eng={titleEng} />
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

export default observer(Contact);
