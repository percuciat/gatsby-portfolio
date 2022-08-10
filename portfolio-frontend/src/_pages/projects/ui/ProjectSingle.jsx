import React from "react";
import { observer } from "mobx-react-lite";
import { GatsbyImage } from "gatsby-plugin-image";
import Markdown from "react-markdown";

import useGlobalStore from "shared/hooks/useGlobalStore";

const ProjectSingle = (props) => {
  const { description, description_eng, title, title_eng, stack, image } =
    props;
  const { lang } = useGlobalStore();

  return (
    <>
      <article className="project-single">
        <div className="project-single__picture">
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            className="project-single__img"
            alt={lang.isRuLang ? title : title_eng}
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
            <Markdown
              children={lang.isRuLang ? description : description_eng}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default observer(ProjectSingle);
