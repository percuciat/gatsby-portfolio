import React from "react"
import PropTypes from "prop-types"
import { FaAngleDoubleRight } from "react-icons/fa"

const JobsArticle = ({dataInfo}) => {
  const {date, company, desc,  position} = dataInfo;
  return (
    <article className="job__info animateAppear">
      <div className="job__title">
        <span className="job__title-info">Должность:</span> {position}
      </div>
      <div className="job__title">
        <span className="job__title-info">Название компании:</span> {company}
      </div>
      <p className="job__date">{date}</p>
      <ul className="job__description">
        {
          desc.map(item => {
            return (
              <li key={item.id} className="job__description-item">
                <FaAngleDoubleRight className="job__description-icon"/>
                <p>{item.name}</p>
              </li>
            )
          })
        }
      </ul>

    </article>
  )
}

JobsArticle.propTypes = {
  dataInfo: PropTypes.object.isRequired,
}


export default JobsArticle
