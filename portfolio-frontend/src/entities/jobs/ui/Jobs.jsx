import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { JobsList } from "./components/JobsList";
import { Title } from "components/common";
import "../jobs.scss";

const Jobs = ({ isRu }) => {
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
      <Title title={titleRu} isRu={isRu} title_eng={titleEng} />

      <JobsList nodes={nodes} isRu={isRu} />
      <Link to="/about" className="btn center-btn">
        {isRu ? "Узнать подробнее" : "Read more"}
      </Link>
    </>
  );
};

export default Jobs;
