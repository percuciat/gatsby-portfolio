import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { isCorrectMediaScreen } from "shared/lib/isCorrectMediaScreen";
import { SocialLinks } from "shared/ui/";
import { TABLET_MINI_MEDIA } from "consts";

const Preview = ({ isRu, widthScreen }) => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query);

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
            {isRu
              ? "Привет, я front-end разработчик"
              : "Hello, I'm front-end developer"}
          </h1>
          <p className="subtitle">
            {isRu ? "Создаю" : "Create"}
            <span className="subtitle-gradient">
              {isRu ? " полезные " : " useful "}
            </span>
            {isRu ? "проекты" : "projects"}
          </p>
          <Link to="/contact" className="btn">
            {isRu ? "написать мне" : "send message"}
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

export default Preview;
