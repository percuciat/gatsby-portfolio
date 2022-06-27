import React from "react";
import { ServicesItems } from "./components/ServicesItem";
import { Title } from "components/common";
import "./services.scss";

const Services = ({ isRu }) => {
  const titleRu = "Что умею";
  const titleEng = "Skills";
  return (
    <>
      <Title title={titleRu} isRu={isRu} title_eng={titleEng} />
      <ServicesItems isRu={isRu} />
    </>
  );
};

export default React.memo(Services);
