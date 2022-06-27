import React from "react";
import "./filter.scss";

const FilterSection = ({
  isRu,
  filterItems,
  activeCategory,
  changeCategory,
}) => {
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
                {isRu ? item.name : item.name_eng}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterSection;
