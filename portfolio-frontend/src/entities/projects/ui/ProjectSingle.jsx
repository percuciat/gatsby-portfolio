import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Markdown from "react-markdown";


const ProjectSingle = ({
  isRu,
  description,
  description_eng,
  title,
  title_eng,
  stack,
  image,
}) => {
  return (
    <>
      <article className="project-single">
        <div className="project-single__picture">
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            className="project-single__img"
            alt={isRu ? title : title_eng}
          />
          <ul className="project-single__stack">
            {stack.map((item) => {
              return (
                <li key={item.id} className="project-single__stack-item">
                  {item.stackTitle}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="project-single__content">
          <div className="contentMarkdown">
            <Markdown children={isRu ? description : description_eng} />
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectSingle;
