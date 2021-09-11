import React from "react";
import {graphql} from "gatsby";
import {ContextApp} from "../stateManager/store";
import { Title, Form } from "../components";
import Layout from "../layout/Layout";
import PageContainer from "../containers/PageContainer";


const Contact = ({data}) => {
  const {state: {isRu}} = React.useContext(ContextApp);
  const {allStrapiContact:{nodes}} = data;

  const titleRu = "Контакты";
  const titleEng = "Contact";

  return (
    <Layout seoData={nodes[0].seo}>
      <PageContainer>
        <Title title={titleRu}
               isRu={isRu}
               title_eng={titleEng} />
        <Form />
      </PageContainer>
    </Layout>
  )
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
