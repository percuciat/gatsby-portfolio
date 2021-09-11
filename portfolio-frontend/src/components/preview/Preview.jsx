import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {GatsbyImage} from "gatsby-plugin-image";
import { SocialLinks } from '../../components';

import "./previewSection.scss";


const Preview = ({isRu}) => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query);

  const [width, setWidth] = React.useState(false);

  React.useEffect(() => {
    const width = window.matchMedia("(max-width: 767px)");
    if (width.matches) {
      setWidth(true)
    }

  }, []);

  return (
    <section className="preview section bg-grey">
        <div className="container preview__wrapper">
          <div className="preview__info" data-sal="slide-up"
                   data-sal-delay="300"
                   data-sal-easing="ease">
            <h1 className="title">
              {isRu ? "Привет, я front-end разработчик" :
                "Hello, I'm front-end developer"}
            </h1>
            <p className="subtitle">
              {isRu ? 'Создаю' : 'Create'}
              <span className="subtitle-gradient">{isRu ? ' полезные ' : ' useful '}</span>
              {isRu ? 'проекты' : 'projects'}
            </p>
            <Link to="/contact" className="btn">
              {isRu ? 'написать мне' : 'send message'}
            </Link>
            <SocialLinks />
          </div>
          {
            !width &&  <GatsbyImage image={gatsbyImageData} className="preview__img" alt="my Photo"/>
          }
        </div>
    </section>
  );
};

const query = graphql`{
    file(relativePath: {eq: "myPhoto.png"}) {
         childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
         }
    }
}`;

export default Preview;
