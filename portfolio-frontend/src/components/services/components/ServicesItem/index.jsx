import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaCode, FaReact, FaCog } from "react-icons/fa";
import Markdown from "react-markdown";

const ServicesData = [
  <FaReact className="service__icon" />,
  <FaCog className="service__icon" />,
  <FaCode className="service__icon" />,
];

const ServicesItems = ({ isRu }) => {
  const {
    allStrapiServices: { nodes },
  } = useStaticQuery(graphql`
    query Services {
      allStrapiServices {
        nodes {
          title
          title_eng
          content
          content_eng
          id
        }
      }
    }
  `);

  return (
    <ul className="service__list">
      {nodes.map((serviceItem, index) => {
        return (
          <li key={serviceItem.id} className="service__item bg-grey">
            {ServicesData[index]}
            <h3 className="service__title">
              {isRu ? serviceItem.title : serviceItem.title_eng}
            </h3>
            <Markdown
              children={isRu ? serviceItem.content : serviceItem.content_eng}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesItems;
