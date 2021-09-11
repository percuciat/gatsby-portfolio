import React from "react";
import { graphql} from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Title, ProjectSingle } from '../components';
import Layout from "../layout/Layout";
import PageContainer from "../containers/PageContainer";
import {ContextApp} from "../stateManager/store";

const ComponentProject = ({ data }) => {
  const {state: {isRu}} = React.useContext(ContextApp);
  const { title, title_eng } = data.projects;
  return (
    <Layout seoData={data.projects}>
      <PageContainer>
        <Title title={title}
               isRu={isRu}
               title_eng={title_eng} />
        <ProjectSingle {...data.projects}/>
        <AniLink swipe direction="right"
                 to="/projects"
                 className="btn center-btn">
          {isRu? 'Смотреть еще': 'Show more'}
        </AniLink>
      </PageContainer>
    </Layout>
  )
};

export const query = graphql`
    query GetSingleProject($slug: String) {
        projects: strapiProjects(slug: { eq: $slug }) {
            description
            description_eng
            title
            title_eng
            image {
               localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
               }
            }
            stack {
                stackTitle
                id
            }
        }
    }
`;

export default ComponentProject;
