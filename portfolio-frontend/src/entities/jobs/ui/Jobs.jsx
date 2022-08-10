import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { observer } from "mobx-react-lite";

import JobsList from "./components/JobsList";
import { Title } from "shared/ui/";

import useGlobalStore from "shared/hooks/useGlobalStore";

const Jobs = () => {
  const { lang } = useGlobalStore();
  const {
    allStrapiJobs: { nodes },
  } = useStaticQuery(graphql`
    query Jobs {
      allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
        nodes {
          strapiId
          company
          date_eng
          date
          position
          position_eng
          desc {
            name
            name_eng
            id
          }
        }
      }
    }
  `);
  const titleRu = "Опыт работы";
  const titleEng = "Experience";

  return (
    <>
      <Title title={titleRu} title_eng={titleEng} />
      <JobsList nodes={nodes} />
      <Link to="/about" className="btn center-btn">
        {lang.isRuLang ? "Узнать подробнее" : "Read more"}
      </Link>
    </>
  );
};

export default observer(Jobs);
