import React from "react"
import { Title, JobsArticle } from '../../components'
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import "../../styled/jobs.scss"


const Jobs = ({title}) => {
    const data = useStaticQuery(query);
    const {allStrapiJobs: {nodes: jobs}} = data;
    // переключаем значение элемента в общем массиве
    const [value, setValue] = React.useState(0);
      return (
        <section className="section bg-grey">
          <div className="container" >
            <Title title={title} />
            <div className="jobs__center">
              <div className="jobs__container">
                {
                  jobs.map((item, index) => {
                  return (
                    <button
                      key={item.strapiId}
                      onClick={() => setValue(index)}
                      className={`job__btn ${index === value? "active": ""}`}
                    >
                      {item.company}
                    </button>
                  )
                })
                }
              </div>
              <JobsArticle dataInfo={jobs[value]} />
            </div>
            <Link to="/about" className="btn center-btn">
              Узнать подробнее
            </Link>
          </div>
        </section>
      )
};

const query = graphql`
    {
        allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
            nodes {
                strapiId
                company
                date
                position
                desc {
                    name
                    id
                }
            }
        }
    }
`;

export default Jobs
