import React from 'react';
import PropTypes, { number } from 'prop-types';

const dataFilterRU = [
  {
    id: 0,
    name: 'Все',
    type: 0
  },
  {
    id: 1,
    name: 'Корпоративные сайты',
    type: 'corporation'
  },
  {
    id: 2,
    name: 'Интернет-магазины',
    type: 'commercial'
  },
  {
    id: 3,
    name: 'Порталы',
    type: 'portals'
  },
  {
    id: 4,
    name: 'Лендинги',
    type: 'landings'
  },
];

const ProjectFilter = ({activeCategory, changeCategory}) => {
  return <>
    <ul className="filter__list">
      {
        dataFilterRU.map((item, index) => {
          return (
            <li className="filter__list-item" key={`${item.id}_${index}`}>
              <button className={`${activeCategory === item.type ? 'active' : ''} filter__list-btn btn`}
                      onClick={() => changeCategory(item.type)}>{item.name}</button>
            </li>
          )
        })
      }
    </ul>
  </>
};

/*ProjectFilter.propTypes = {
  activeCategory: PropTypes.string | number,
};*/
ProjectFilter.defaultProps = {
  activeCategory: ''
};

export default ProjectFilter;
