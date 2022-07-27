import React from "react";
import { observer } from "mobx-react-lite";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { isCorrectMediaScreen } from "shared/lib/isCorrectMediaScreen";
import { SocialLinks } from "shared/ui/";
import { TABLET_MINI_MEDIA } from "consts";

import useGlobalStore from "shared/hooks/useGlobalStore";

const Preview = (props) => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query);
  const { lang } = useGlobalStore();

  return (
    <section className="preview section bg-grey">
      <div className="container preview__wrapper">
        <div
          className="preview__info"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <h1 className="title">
            {lang.isRuLang
              ? "Привет, я front-end разработчик"
              : "Hello, I'm front-end developer"}
          </h1>
          <p className="subtitle">
            {lang.isRuLang ? "Создаю" : "Create"}
            <span className="subtitle-gradient">
              {lang.isRuLang ? " полезные " : " useful "}
            </span>
            {lang.isRuLang ? "проекты" : "projects"}
          </p>
          <Link to="/contact" className="btn">
            {lang.isRuLang ? "написать мне" : "send message"}
          </Link>
          <SocialLinks />
        </div>
        {/* {isCorrectMediaScreen(+widthScreen, TABLET_MINI_MEDIA.name) && (
          <GatsbyImage
            image={gatsbyImageData}
            className="preview__img"
            alt="my Photo"
          />
        )} */}
        <GatsbyImage
          image={gatsbyImageData}
          className="preview__img"
          alt="my Photo"
        />
      </div>
    </section>
  );
};

const query = graphql`
  {
    file(relativePath: { eq: "myPhoto.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export default observer(Preview);
