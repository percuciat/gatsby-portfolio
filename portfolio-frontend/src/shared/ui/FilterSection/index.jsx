import React from "react";
import { observer } from "mobx-react-lite";
import useGlobalStore from "shared/hooks/useGlobalStore";

const FilterSection = (props) => {
  const { filterItems, activeCategory, changeCategory } = props;
  const { lang } = useGlobalStore();

  return (
    <div className="filter__list-wrapper">
      <ul className="filter__list">
        {filterItems.map((item, index) => {
          return (
            <li className="filter__list-item" key={`${item.title}_${index}`}>
              <button
                className={`${
                  activeCategory == item.title ? "active" : ""
                } filter__list-btn btn`}
                onClick={() => changeCategory(item.title)}
              >
                {lang.isRuLang ? item.name : item.name_eng}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default observer(FilterSection);
