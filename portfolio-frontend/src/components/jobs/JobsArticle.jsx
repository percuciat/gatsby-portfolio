import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const JobsArticle = ({dataInfo, isRu}) => {
  const {date, company, desc, position, position_eng} = dataInfo;
  return (
    <article className="jobs__info animateAppear">
      <div className="jobs__title">
        <span className="jobs__title-info">
          {isRu ? 'Должность' : 'Position'}:
        </span>
        {isRu ? position : position_eng}
      </div>
      <div className="jobs__title">
        <span className="jobs__title-info">
          {isRu ? 'Компания' : 'Company'}:
        </span>
        {company}
      </div>
      <p className="jobs__date">{date}</p>
      <ul className="jobs__description">
        {
          desc.map(item => {
            return (
              <li key={item.id} className="jobs__description-item">
                <FaAngleDoubleRight className="jobs__description-icon"/>
                <p>{isRu? item.name : item.name_eng}</p>
              </li>
            )
          })
        }
      </ul>

    </article>
  )
};


export default JobsArticle
