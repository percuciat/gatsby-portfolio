import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Markdown from "react-markdown";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

const dataStack = [
  {
    id: 1,
    icon: <FaHtml5 className="stack__icon" />,
  },
  {
    id: 2,
    icon: <FaCss3 className="stack__icon" />,
  },
  {
    id: 3,
    icon: <FaJs className="stack__icon" />,
  },
  {
    id: 4,
    icon: <FaReact className="stack__icon" />,
  },
];

const AboutSection = ({ isRu, textAbout_eng, shareImage, textAbout }) => {
  return (
    <div className="about__wrapper">
      <GatsbyImage
        image={shareImage.localFile.childImageSharp.gatsbyImageData}
        className="about__img"
        alt="asd"
      />
      <article className="contentMarkdown">
        <Markdown children={isRu ? textAbout : textAbout_eng} />
        <ul className="about__stack">
          {dataStack.map((item) => {
            return (
              <li key={item.id} className="about__stack-item">
                {item.icon}
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default AboutSection;
