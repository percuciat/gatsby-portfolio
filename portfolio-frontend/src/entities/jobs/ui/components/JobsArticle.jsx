import React from "react";
import { observer } from "mobx-react-lite";
import { FaAngleDoubleRight } from "react-icons/fa";

import useGlobalStore from "shared/hooks/useGlobalStore";

const JobsArticle = (props) => {
  const {
    dataInfo: { date, date_eng, company, desc, position, position_eng },
  } = props;
  const { lang } = useGlobalStore();
  return (
    <article className="jobs__info animateAppear">
      <div className="jobs__title">
        <span className="jobs__title-info">
          {lang.isRuLang ? "Должность" : "Position"}:
        </span>
        {lang.isRuLang ? position : position_eng}
      </div>
      <div className="jobs__title">
        <span className="jobs__title-info">
          {lang.isRuLang ? "Компания" : "Company"}:
        </span>
        {company}
      </div>
      <p className="jobs__date">{lang.isRuLang ? date : date_eng}</p>
      <ul className="jobs__description">
        {desc.map((item) => {
          return (
            <li key={item.id} className="jobs__description-item">
              <FaAngleDoubleRight className="jobs__description-icon" />
              <p>{lang.isRuLang ? item.name : item.name_eng}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default observer(JobsArticle);
