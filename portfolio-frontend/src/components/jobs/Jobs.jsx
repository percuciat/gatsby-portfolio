import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Title, JobsList } from '../../components';
import "./jobs.scss";



const Jobs = ({isRu}) => {
  const {allStrapiJobs: {nodes}} = useStaticQuery(graphql`
    query Jobs {
        allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
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
        <Title  title={titleRu}
                isRu={isRu}
                title_eng={titleEng}/>

        <JobsList nodes={nodes}
                  isRu={isRu}/>
        {/*<div className="jobs__center">
          <div className="jobs__container">
            {
              nodes.map((item, index) => {
              return (
                <button
                  key={item.strapiId}
                  onClick={() => setValue(index)}
                  className={`jobs__btn ${index === value? "active": ""}`}
                >
                  {item.company}
                </button>
              )
            })
            }
          </div>
          <JobsArticle dataInfo={nodes[value]} isRu={isRu}/>
        </div>*/}
        <Link to="/about" className="btn center-btn">
          {isRu ? 'Узнать подробнее' : 'Read more'}
        </Link>
    </>
  )
};

export default Jobs
