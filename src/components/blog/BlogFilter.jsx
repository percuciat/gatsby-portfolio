import React from 'react';
import PropTypes from 'prop-types';

const dataBlogFilter = [
  {
    id: 99,
    name: 'все',
  },
  {
    id: 0,
    name: 'html',
  },
  {
    id: 1,
    name: 'css',
  },
  {
    id: 2,
    name: 'javascript',
  },
  {
    id: 3,
    name: 'react',
  },
  {
    id: 4,
    name: 'typescript',
  },
];

const BlogFilter = ({activeCategory, changeCategory}) => {
  return (
    <ul className="filter__list">
      {
        dataBlogFilter.map((item, index) => {
          return (
            <li className="filter__list-item" key={`${item.id}_${index}`}>
              <button className={`${activeCategory === item.name ? 'active' : ''} filter__list-btn btn`}
              onClick={() => changeCategory(item.name)}>
                {item.name}</button>
            </li>
          )
        })
      }
    </ul>
  );
};

BlogFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};
BlogFilter.defaultProps = {
  activeCategory: ''
};

export default BlogFilter;
